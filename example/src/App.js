import logo from './logo.svg';
import './App.css';
import { SVGGantt, CanvasGantt, StrGantt } from 'gantt';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [content, setContent] = useState(false);
  const divRef = useRef(null);
  const contentRef = useRef(null);

  const handleClick = (event) => {
    alert("hiii");
  }

  const data = [{
    id: 1,
    type: 'group',
    text: '1 Waterfall model',
    start_end: "dgfdg",
    start: new Date('2018-10-10T09:24:24.319Z'),
    end: new Date('2018-12-12T09:32:51.245Z'),
    percent: 0.71,
    links: [],   
  }, {
    id: 11,
    parent: 1,
    text: '1.1 Requirements',
    start_end: "dgfdg",
    start: new Date('2018-10-21T09:24:24.319Z'),
    end: new Date('2018-11-22T01:01:08.938Z'),
    percent: 0.29,
    links: [{
      target: 12,
      type: 'FS',      
    }],    
  }, {
    id: 12,
    parent: 1,
    text: '1.2 Design',
    start_end: "dgfdg",
    start: new Date('2018-11-05T09:24:24.319Z'),
    end: new Date('2018-12-12T09:32:51.245Z'),
    percent: 0.78,    
  }];

  useEffect(()=>{
    new SVGGantt('#svg-root', data, contentRef.current.offsetWidth, {
      viewMode: 'week'
    });
  
    const strGantt = new StrGantt(data, contentRef.current.offsetWidth, {
      viewMode: 'week'
    });
    strGantt.render()
    
  }, [])

  useEffect(()=>{      
    contentRef.current.innerHTML = divRef.current.innerHTML;  
    setContent(true);    
  }, [divRef])

  useEffect(()=>{   
    if(content) {
      contentRef.current.querySelectorAll(".construe__checkbox").forEach((element, index)=> {        
        element.addEventListener("click", handleClick)
      });
    }           
  }, [content])

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="App" id={"svg-container"} ref={contentRef} style={{height: "100vh", width: "50vw"}}>        
      </div>
      {!content ? <div className="App" id={"svg-root"} ref={divRef} style={{height: "100vh", width: "100vw", display: "none"}}>       
      </div> : null}
    </div>
  );
}

export default App;
