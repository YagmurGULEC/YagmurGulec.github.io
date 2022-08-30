
let selected_year=[];
let size='';
var colors=['#4e73df','#e74a3b'];

const linePlotSection = (title) => {
  return `
  <div class="col-xl-8 col-lg-7 align-items-center">
                            <div class="card shadow mb-4">
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">${title}</h6>
                                </div>
                                <div class="card-body">
                                    <div class="chart-area"></div>
                                </div>
                            </div>
                        </div>
                       

`;
};

const piePlotSection = (title,div) => {
  return `
  <div class="col-xl-4 col-lg-7 align-items-center">
                            <div class="card shadow mb-4">
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">${title}</h6>
                                    <select class="form-select" aria-label="Default select example" id=${div}>
                                      <option value="1" selected>Total</option>
                                      <option value="2">Only successful</option>
                                    </select>
                                </div>
                                <div class="card-body">
                                    <div class="chart-area" id=${div}></div>
                                </div>
                            </div>
                        </div>
                       

`;
};

const createTable= () => {
  return `
  <div class="col-xl-4 col-lg-7">
                            <div class="card shadow mb-4 scroll">
                            <div class="card-body">
                                    <div class="chart-area" id="table">
                                        <table class="table">
                                            <thead>
                                              <tr>
                                              <th scope="col">Date</th>
                                              <th scope="col">Company</th>
                                              <th scope="col">Location</th>
                                              <th scope="col">MissionStatus</th>
                                              <th scope="col">Rocket</th>
                                              </tr>
                                            </thead>
                                            
                                            <tbody>
                                               
                                            </tbody>
                                          </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
`;
};

const onlyUnique=(value, index, self)=>{
  return self.indexOf(value) === index;
};

const Histogram=(Data)=>{
  var counts={};
  for (const num of Data) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
};

const createPieChart=(div,values)=>{
  var plot_data=[{
    values:Object.values(values),
    labels:Object.keys(values),
    type:'pie'
  }];
  var layout = {
   font: {
      family: 'Nunito',
      size: 15
    },
   
  };
  Plotly.newPlot(div,plot_data,layout);
};

const createLinePlot=(div,x,names)=>{
  var data=[];
  
  x.forEach((a,e)=>{
    
    var d={
        x:Object.keys(a),
        y:Object.values(a),
        type: 'scatter',
        mode: 'lines+markers',
        name:`${names[e]}`,
        line: {
          color: Array(Object.keys(a).length).fill(colors[e]),
          width: 3,
        },
        marker: {
          color:Array(Object.keys(a).length).fill(colors[e]),
          size:14,
        }
      };
    data.push(d);
    
  });
  var layout=
    {
      xaxis:{
        title:'Year',
      },
      yaxis:{
        title:"Number of Mission",
      },
      title: {
        text:`Succesful missions ${newData.filter(x=>x.MissionStatus=='Success').length} out of Total ${newData.length} Space missions`,
      },
      hovermode:'closest',
    };  
  Plotly.newPlot(div,data,layout);
};

const Filter=(Data,keys,values)=>{
  var result = Data.filter(function(e) {
    return keys.every(function(a) {
      return values.includes(e[a])
    })
  });
  return result;
};

const truncate=(values,threshold)=>
{
  const sum=Object.values(values).reduce((x,y)=>x+y);
  var newObj={};
  var s=0;
  for (let [key, value] of Object.entries(values)) 
  {
    let p=value/sum;
    
    if (p>threshold)
    {
      
      newObj[key]=value;
    }
    else
    {
      s+=value;
    }
  }
  if (s>0)
  {
    newObj['Other']=s;
  }
  
  return newObj;
};

const changeColor=(data_plot)=>{
  var pn='',
  tn='',
  colors=[];
  names='';
  for(var i=0; i < data_plot.points.length; i++)
  {
    
    pn = data_plot.points[i].pointNumber;
    tn = data_plot.points[i].curveNumber;
    names=data_plot.points[i].data.name;
    colors=data_plot.points[i].data.marker.color;

  };
  colors[pn] = '#00FF00';
  var update = {'marker':{color: colors, size:14}};
  Plotly.restyle('plot_1', update, [tn]);
  var year=data_plot.points[0].data.x[pn];
  var obj={'year':year,'names':names};
  if (!selected_year.find((index)=>(index.year==year)&&(index.names==names)))
  {
    selected_year.push(obj);
  }
  const table_body=document.querySelector('table').querySelector('tbody');
  table_body.innerHTML="";
  var tabulate=Filter(newData,['year'],selected_year.map(x=>x.year));
  
  tabulate.forEach((index,element)=>{
    table_body.innerHTML+=`<tr><td>${index['Date']}</td><td>${index['Company']}</td><td>${index['Location']}</td><td>${index['MissionStatus']}</td><td>${index['Rocket']}</td></tr>`;
  });
  
  var divs=document.querySelectorAll('.chart-area');
  divs.forEach((index,element)=>{
    if ((element==2)||(element==3)||(element==4))
    {
      var values=Histogram(tabulate.map(x=>x[index.id]));
      var filtered=truncate(values,0.02);
      createPieChart(index,filtered);
    }
    
  });
  //
};

const refreshColor=(data_plot)=>{

  var colors_1 =Array(size).fill(colors[0]);
  var colors_2 =Array(size).fill(colors[1]);
  var update = {'marker':[{color: colors_1,size:14},{color: colors_2,size:14}]};
  Plotly.restyle('plot_1', update);
  const table_body=document.querySelector('table').querySelector('tbody');
  table_body.innerHTML='';
  selected_year=[];
  var divs=document.querySelectorAll('.chart-area');
  var selection_divs=document.querySelectorAll('.form-select');
  divs.forEach((index,element)=>{
    if ((element==2)||(element==3)||(element==4))
    {
      var values=Histogram(newData.map(x=>x[index.id]));
      var filtered=truncate(values,0.02);
      createPieChart(index,filtered);
      var s_div='';
      selection_divs.forEach(s=>{
        if (s.id==index.id)
        {
          s.options[0].selected=true;
        }
      })
    }
    
  });

};

const newData=data;
  newData.forEach(x=>x.year=x.Date.split('-')[0]);
  newData.forEach(x=>
    {
      let array=x.Location.split(',');
      let size=array.length;
      x.Country=array[size-1];
    });
    
const row_1 = document.createElement("row");
row_1.setAttribute("class","row");
const section=document.querySelector('.container-fluid');
row_1.innerHTML = linePlotSection('Timeline of Space Missions');
row_1.innerHTML+=createTable();
section.appendChild(row_1);

const row_2 = document.createElement("row");
row_2.setAttribute("class","row");
row_2.innerHTML= piePlotSection('Contribution of Countries','Country');
row_2.innerHTML+= piePlotSection('Contribution of Companies','Company');
row_2.innerHTML+= piePlotSection('Contribution of Rockets','Rocket');
section.appendChild(row_2);
const chart_area=document.querySelectorAll('.chart-area');
const selection=document.querySelectorAll('.form-select');

chart_area.forEach((index,element)=>{
  //first card for line plot
  var div=index;
  if (element==0)
  {
    
    index.id='plot_1';
    const values = Histogram(newData.map(x=>x.year));
    var result=Filter(newData,["MissionStatus"],["Success"]);
    
    var counts=Histogram(result.map(x=>x.year));
    
    var colors_1=Array(Object.keys(values).length).fill(colors[0]);
    size=colors_1.length;
    var colors_2=Array(Object.keys(values).length).fill(colors[1]);
    createLinePlot(index,[values,counts],['Total','Successful']);
   
  }
  if ((element==2)||(element==3)||(element==4))
  {
    const values = Histogram(newData.map(x=>x[index.id]));
    const filtered=truncate(values,0.02);
    createPieChart(index,filtered);
  }
});

var line_plot=document.querySelector('#plot_1');
line_plot.on('plotly_click', changeColor);
line_plot.on('plotly_doubleclick', refreshColor);

selection.forEach((s)=>s.onchange=(e)=>
{
  var option=e.target.options[e.target.selectedIndex].value;
  var divs=document.querySelectorAll('.chart-area');
  var this_div;
  divs.forEach(index=>{
    if(index.id==s.id)
    this_div=index;
  });
  var values=[];
  if (option==1)
  {
    if (selected_year.length==0)
    {
      values=Histogram(newData.map(x=>x[this_div.id]));
    }
    else
    {
      var d=Filter(newData,['year'],selected_year.map(x=>x.year)); 
      values=Histogram(d.map(x=>x[this_div.id]));
    }  
     
  }
  else
  {
    if (selected_year.length==0)
      values=Histogram(newData.filter(x=>x.MissionStatus=='Success').map(x=>x[this_div.id]));
    else
    {
      var d=Filter(newData.filter(x=>x.MissionStatus=='Success'),['year'],selected_year.map(x=>x.year));
      values=Histogram(d.map(x=>x[this_div.id]));
    }
      
  }
  const filtered=truncate(values,0.02);
  createPieChart(this_div,filtered);
 
});
