// import { render } from "@testing-library/react";
import React from "react";
import './Ipod.css';
import { useState } from "react";
import song1 from "../src/music/s1.mp3";
import song2 from "../src/music/s2.mp3";
import song3 from "../src/music/s3.mp3"; 
import song4 from "../src/music/s4.mp3"; 
import song5 from "../src/music/s5.mp3"; 
import songpic1 from "../src/images/song1.jpg";
import songpic2 from "../src/images/song2.png";
import songpic3 from "../src/images/song3.jpg";
import songpic4 from "../src/images/song4.png";
import songpic5 from "../src/images/song5.jpg";
import wallpaper1 from "../src/images/nature.webp";
import wallpaper2 from "../src/images/space.jpg";
import wallpaper3 from "../src/images/love.jpg";
import wallpaper4 from "../src/images/pattern.jpg";
import artist1 from "../src/images/artist1.webp";
import artist2 from "../src/images/artist2.png";
import artist3 from "../src/images/artist3.png";
import artist4 from "../src/images/artist4.png";
import water from "../src/images/water.jpeg";
import gamewallpaper from "../src/images/game.jpg";
import musicimg from "../src/images/musicimg.jpg";
import songlistimg from "../src/images/songlist.jpg";
import ttcbg from "../src/images/ttcbg.jpg";
import ttcrbg from "../src/images/ttcrbg.jpg";
import settingimg from "../src/images/settingimg.png";



var arx=[];
var aro=[];
let ct=0;

localStorage.setItem("ZeroCount",0);
localStorage.setItem("CrossCount",0);
const arstring=["123","456","789","147","258","369","159","357"];
    const Ipod=()=>{
       
    const time=new Date();


    const [screen, setScreen] = useState(0);
    const [bgvalue,setBgvalue] =useState(1);
    const [sidebarans,setSidebarans]=useState(false);
    const [wallpaper,setWallpaper]=useState(wallpaper1);
    var pointerX ;
    var flag=1;
    const[flag1,setFlag1]=useState(0);
    const[extra,setExtra]=useState(0);
    const[songname,setSongname]=useState('');;
    const[singername,setSingername]=useState('');
    const[songpic,setSongpic]=useState('');
    const[audio,setAudio]=useState();
    const[gameans,setGameans]=useState(0);
    const[gameans1,setGameans1]=useState("");


    var t1 =document.querySelector('.r1c1');
    var t2 =document.querySelector('.r1c2');
    var t3 =document.querySelector('.r1c3');
    var t4 =document.querySelector('.r2c1');
    var t5 =document.querySelector('.r2c2');
    var t6 =document.querySelector('.r2c3');
    var t7 =document.querySelector('.r3c1');
    var t8 =document.querySelector('.r3c2');
    var t9 =document.querySelector('.r3c3');



    
   function mouseMove(event) {
        var start=45;
        var end=54;
        var mid=0;
        var diff=0;
        var gap=0,gap1=0;
            var x=event.target;
        pointerX = (event.pageX/window.innerWidth)*100;
        // pointerY = event.pageY;
    if(flag1===0)
    { 
        diff=1550-window.innerWidth;
        start-=diff/100;
        end+=diff/100;
        mid=(end-start)/2;
        mid+=start+1;

        gap=(mid-start)/4;
        gap1=(end-mid)/3;
        
    
        if(x.id!=='stop')   
    {  
        if((pointerX>=start&&pointerX<(start+gap+.5))||(pointerX>=(mid+gap1*2)&&pointerX<(mid+gap1*3)))
        { 
         flag=1;
         setBgvalue(1);
        }
        else if((pointerX>=(start+gap)&&pointerX<(start+gap*2))||(pointerX>=(mid+gap1)&&pointerX<(mid+gap1*2)))
        { setBgvalue(2);
            flag=2;
        }
        else if((pointerX>=(start+gap*2)&&pointerX<(start+gap*3))||(pointerX>=mid&&pointerX<(mid+gap1)))
        { 
            setBgvalue(3);
            flag=3;
        }    
        else if((pointerX>=(start+gap*3)&&pointerX<(mid)))
        { 
            setBgvalue(4);
            flag=4;
        }
    }
    }
    else if(flag1===1)
    { 
        diff=1550-window.innerWidth;
        start-=diff/100;
        end+=diff/100;
        mid=(end-start)/2;
        mid+=start+1;

        gap=(mid-start)/4;
        gap1=(end-mid)/3;
        
    
        if(x.id!=='stop')   
    {  
        if((pointerX>=start&&pointerX<(start+gap+.5))||(pointerX>=(mid+gap1*2)&&pointerX<(mid+gap1*3)))
        { 
         flag=1;
         setBgvalue(11);
        }
        else if((pointerX>=(start+gap)&&pointerX<(start+gap*2))||(pointerX>=(mid+gap1)&&pointerX<(mid+gap1*2)))
        { setBgvalue(12);
            flag=2;
        }
        else if((pointerX>=(start+gap*2)&&pointerX<(start+gap*3))||(pointerX>=mid&&pointerX<(mid+gap1)))
        { 
            setBgvalue(13);
            flag=3;
        }    
        else if((pointerX>=(start+gap*3)&&pointerX<(mid)))
        { 
            setBgvalue(14);
            flag=4;
        }
    }
    }
    else if(flag1===2)
    {
        diff=1550-window.innerWidth;
        start-=diff/100;
        end+=diff/100;
        mid=(end-start)/2;
        mid+=start+1;
        gap=(mid-start)/3;
        gap1=(end-mid)/2;
        
    
        if(x.id!=='stop')   
    {
        if((pointerX>=start&&pointerX<(start+gap))||(pointerX>=(mid+gap1)&&pointerX<(mid+gap1*2)))
        { setBgvalue(21);
            flag=1;
        }
        else if((pointerX>=(start+gap)&&pointerX<(start+gap*2))||(pointerX>=mid&&pointerX<(mid+gap1)))
        {
            setBgvalue(22);flag=2;
        }
        else if((pointerX>=(start+gap*2)&&pointerX<mid))
        {  setBgvalue(23);flag=3;
        }    
        
    }
    
    }
    else if(flag1===3)
    { 
        diff=1550-window.innerWidth;
        start-=diff/100;
        end+=diff/100;
        mid=(end-start)/2;
        mid+=start+1;

        gap=(mid-start)/5;
        gap1=(end-mid)/4;
        
    
        if(x.id!=='stop' && screen!==211)   
    {  
        if((pointerX>=start&&pointerX<(start+gap+.5))||(pointerX>=mid&&pointerX<(mid+gap1)))
        { 
         flag=1;
         setBgvalue(211);
         setAudio(song1);
        }
        else if((pointerX>=(start+gap)&&pointerX<(start+gap*2))||(pointerX>=(mid+gap1)&&pointerX<(mid+gap1*2)))
        { setBgvalue(212);
            flag=2;
            setAudio(song2);
        }
        else if((pointerX>=(start+gap*2)&&pointerX<(start+gap*3))||(pointerX>=(mid+gap1*2)&&pointerX<(mid+gap1*3)))
        { 
            setBgvalue(213);
            flag=3;
            setAudio(song3);
        }    
        else if((pointerX>=(start+gap*3)&&pointerX<(start+gap*4))||(pointerX>=(mid+gap1*3)&&pointerX<(mid+gap1*4)))
        { 
            setBgvalue(214);
            flag=4;
            setAudio(song4);
        }
        else if((pointerX>=(start+gap*4)&&pointerX<mid))
        { 
            setBgvalue(215);
            flag=5;
            setAudio(song5);
        }
       
    }
    }
    else if(flag1===4)
    { 
        diff=1550-window.innerWidth;
        start-=diff/100;
        end+=diff/100;
        mid=(end-start)/2;
        mid+=start+1;

        gap=(mid-start)/4;
        gap1=(end-mid)/3;
        
    
        if(x.id!=='stop')   
    {  
        if((pointerX>=start&&pointerX<(start+gap+.5))||(pointerX>=mid&&pointerX<(mid+gap1)))
        { 
         flag=1;
         setBgvalue(221);
        }
        else if((pointerX>=(start+gap)&&pointerX<(start+gap*2))||(pointerX>=(mid+gap1)&&pointerX<(mid+gap1*2)))
        { setBgvalue(222);
            flag=2;
        }
        else if((pointerX>=(start+gap*2)&&pointerX<(start+gap*3))||(pointerX>=(mid+gap1*2)&&pointerX<(mid+gap1*3)))
        { 
            setBgvalue(223);
            flag=3;
        }    
        else if((pointerX>=(start+gap*3)&&pointerX<(mid)))
        { 
            setBgvalue(224);
            flag=4;
        }
    }
    }
    else if(flag1===5)
    { 
        diff=1550-window.innerWidth;
        start-=diff/100;
        end+=diff/100;
        mid=(end-start)/2;
        mid+=start+1;

        gap=(mid-start)/9;
        gap1=(end-mid)/8;
        
    
        if(x.id!=='stop')   
    {  
        if((pointerX>=start&&pointerX<(start+gap+.5))||(pointerX>=mid&&pointerX<(mid+gap1)))
        { 
         flag=1;
         setBgvalue(311);
        }
        else if((pointerX>=(start+gap)&&pointerX<(start+gap*2))||(pointerX>=(mid+gap1)&&pointerX<(mid+gap1*2)))
        { setBgvalue(312);
            flag=2;
        }
        else if((pointerX>=(start+gap*2)&&pointerX<(start+gap*3))||(pointerX>=(mid+gap1*2)&&pointerX<(mid+gap1*3)))
        { 
            setBgvalue(313);
            flag=3;
        }
        else if((pointerX>=(start+gap*3)&&pointerX<(start+gap*4))||(pointerX>=(mid+gap1*3)&&pointerX<(mid+gap1*4)))
        { setBgvalue(314);
            flag=4;
        }
        else if((pointerX>=(start+gap*4)&&pointerX<(start+gap*5))||(pointerX>=(mid+gap1*4)&&pointerX<(mid+gap1*5)))
        { 
            setBgvalue(315);
            flag=5;
        }
        else if((pointerX>=(start+gap*5)&&pointerX<(start+gap*6))||(pointerX>=(mid+gap1*5)&&pointerX<(mid+gap1*6)))
        { setBgvalue(316);
            flag=6;
        }
        else if((pointerX>=(start+gap*6)&&pointerX<(start+gap*7))||(pointerX>=(mid+gap1*6)&&pointerX<(mid+gap1*7)))
        { 
            setBgvalue(317);
            flag=7;
        }
        else if((pointerX>=(start+gap*7)&&pointerX<(start+gap*8))||(pointerX>=(mid+gap1*7)&&pointerX<(mid+gap1*8)))
        { setBgvalue(318);
            flag=8;
        }            
        else if((pointerX>=(start+gap*8)&&pointerX<(mid)))
        { 
            setBgvalue(319);
            flag=9;
        }
    }
    }
    
    }
    
     
    
   function enter() {

if(sidebarans){ 
    
    if(bgvalue<5)
    {
        if(flag===1)
          { setScreen(1);
            setFlag1(1);
          }
        else if(flag===2)
        {
           setScreen(2);
           flag=1;
           setFlag1(2);
        }
        else if(flag===3)
         {  setScreen(3);setBgvalue(31);setFlag1(10);}
        else if(flag===4)
           setScreen(4);
    }
    else if(bgvalue<15)
    {
        if(flag===1)
           setWallpaper(wallpaper1);
        else if(flag===2)
           setWallpaper(wallpaper2);      
        else if(flag===3)
           setWallpaper(wallpaper3);
        else if(flag===4)
           setWallpaper(wallpaper4);
    
    }
    else if(bgvalue<24)
    {
        if(flag===1)
        {setScreen(21);
         setFlag1(3);
         setExtra(1);
        }
        if(flag===2)
        {
            setScreen(22);
         setFlag1(4);
         setExtra(1);
        }

    }
    else if(bgvalue<35){
    setScreen(31);setExtra(1);setFlag1(5);
    }
    else if(bgvalue<=220)
    {
        if(flag===1)
        {
            setScreen(211);
            setSongname(`We can't talk anymore`);
            setSingername(`Charlie Puth`);
            setSongpic(songpic1);
            setExtra(1);
        }
        if(flag===2)
        {
            setScreen(211);
            setSongname('Hate me');
            setSingername('Juice WRLD , Ellie Goulding');
            setSongpic(songpic2);
            setExtra(1);
        }
        if(flag===3)
        {
            setScreen(211);
            setSongname('No Scars to your Beautiful');
            setSingername('Alessia Cara');
            setSongpic(songpic3);
            setExtra(1);
        }
        if(flag===4)
        {
            setScreen(211);
            setSongname('Shape of you');
            setSingername('Ed Sheeran');
            setSongpic(songpic4);
            setExtra(1);
        }
        if(flag===5)
        {
            setScreen(211);
            setSongname('Bad Guy');
            setSingername('Billie Ellish');
            setSongpic(songpic5);
            setExtra(1);
        }
    }
    else if(bgvalue<=320)
    {

        if(flag===1)
       move(t1,1);
       if(flag===2)
       move(t2,2);
       if(flag===3)
       move(t3,3);
       if(flag===4)
       move(t4,4);
       if(flag===5)
       move(t5,5);
       if(flag===6)
       move(t6,6);
       if(flag===7)
       move(t7,7);
       if(flag===8)
       move(t8,8);
       if(flag===9)
       move(t9,9);
        
    }



}
   }
    
    function menuclick() {

        /* Home screen */
        if(screen===0)
       { if(sidebarans)
          setSidebarans(!sidebarans);
          else
          setSidebarans(!sidebarans);
       }

    if(screen===21||screen===22)
    {
     flag=1;
     setExtra(0);
     setScreen(2);
     setFlag1(2);
    }
    else if(screen===211)
    {
      setScreen(21);
      setFlag1(3);
    }
    else if(screen===31)
    {
        setScreen(3);
        setExtra(0);
        setBgvalue(31);
        setFlag1(10);
    }
    else 
    { setScreen(0);
        flag=1;
        setFlag1(0);
    }
    }
    
    
    const reset=()=>{
        // setGameans(0);

        for(var k=0;k<9;k++)
        {
          document.getElementsByClassName("reset")[k].textContent="";
          setPlayer1(true);
          ct=0;
         arx=[];
         aro=[];
        }
      }
      
const [player1,setPlayer1]=useState(true);
      
      
      
let val= player1?"X":"O"; 
const move=(e,value)=>{

if(e.textContent==='')
{
  e.textContent=val;
  setPlayer1(!player1);
  if(player1)
  {arx.push(value);
  ct++;
}
  else
  aro.push(value);
}

if(ct>=3)
{
  for(let z=0;z<8;z++)
  {
    let flag=1;
    for(let m=0;m<3;m++)
    { 
      if(flag===1)
      {
        let ctp=0;
       let ans= parseInt(arstring[z].charAt(m));
        for(let j=0;j<arx.length;j++)
        {
          
          if(ans!==arx[j])
            ctp++;
           
        }
        if(ctp===arx.length)
         flag=0;
      }
    }
    if(flag===1)
    { 
    //  alert("Player1(X) WIN");
     setGameans(1);
     setGameans1("Cross Won");
     setInterval(()=>{
      setGameans(0);
     },3000);
     reset();
     break;
    }
    flag=1;
  }
}
if(ct>=3)
{
  for(let z=0;z<8;z++)
  {
    let flag=1;
    for(let m=0;m<3;m++)
    { 
      if(flag===1)
      {
        let ctp=0;
       let ans= parseInt(arstring[z].charAt(m));
        for(let j=0;j<aro.length;j++)
        {
          
          if(ans!==aro[j])
            ctp++;
           
        }
        if(ctp===aro.length)
         flag=0;
      }
    }
    if(flag===1)
    { 
    //  alert("Player2(O) WIN");
     setGameans(1);
     setGameans1("Zero Won");
     setInterval(()=>{
        setGameans(0);
     },3000);
    reset();
     break;
    }
    flag=1;
  }
}
if(ct===5)
{ 
    setGameans(1);
    setGameans1("Draw");
    setInterval(()=>{
       setGameans(0);
    },3000);
 reset();
}
}


    return (
        <div className="mainbody">
        <div className="menu"style={{background:`url(${wallpaper}) no-repeat center/cover`  }}>
         {<div className="sidebar" >
                
            {screen===1&& <div className="coverflow">
           
           <div className="coverflowmenu">
                 <div className="coverflowmenuleft">
                 <div className="time">
               
               <p >VG</p>
            <div className="navicons">
            <p>{time.toTimeString().substring(0,5)}</p>
            <i className="fa fa-battery-half " aria-hidden="true"></i>
                </div>
                    </div>
                     <div className="coverflowheading"><h4>Coverflow</h4></div>
                     {
                         bgvalue===11?
                         <div className="coverflowoptn1" style={{backgroundColor:'rgba(0, 0, 255,.6)'}}><p>Nature</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn1"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>Nature</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     {
                         bgvalue===12?
                         <div className="coverflowoptn2" style={{backgroundColor:'rgba(0, 0, 255,.6)'}}><p>Space</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn2"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>Space</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     {
                         bgvalue===13?
                         <div className="coverflowoptn3" style={{backgroundColor:'rgba(0, 0, 255,.6)'}}><p>Love</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn3"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>Love</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     {
                         bgvalue===14?
                         <div className="coverflowoptn4" style={{backgroundColor:'rgba(0, 0, 255,.6)'}}><p>Pattern</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn4"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>Pattern</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                 </div>
                 <div className="coverflowmenuright" style={{background:`url(${wallpaper}) no-repeat center/cover` }}></div>:
             </div>
            </div>}
            {screen===3&&
            <div className="games" >
                   <div className="coverflowmenu">
                 <div className="coverflowmenuleft">
                 <div className="time">
               
               <p >VG</p>
            <div className="navicons">
            <p>{time.toTimeString().substring(0,5)}</p>
            <i className="fa fa-battery-half " aria-hidden="true"></i>
                </div>
                    </div>
                     <div className="coverflowheading"><h4>Games</h4></div>
                     {
                         bgvalue===31?
                         <div className="coverflowoptn1" style={{backgroundColor:'rgba(0, 0, 255,.6)'}}><p>Tic Tac Toe</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn1"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>Tic Tac Toe</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                    
                 </div>
                 <div className="coverflowmenuright" style={{background:`url(${gamewallpaper}) ` }}></div>:
             </div>
            </div>}
            { screen===31 &&
              <div className="game1" style={{background:`url(${ttcbg}) no-repeat center/cover`}}>
               {gameans===0 &&   <table>
      <tbody>
      <tr className="row1">
       { bgvalue===311 ?
        <td className="r1c1 reset " style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }}  ></td>:
        <td className="r1c1 reset " style={{backgroundColor:'rgba(255, 255, 255,.6)' }}  ></td>}
       {bgvalue===312?
        <td className="r1c2 reset" style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }} ></td>:
        <td className="r1c2 reset" style={{backgroundColor:'rgba(255, 255, 255,.6)' }} ></td>
       }
       { bgvalue===313?
        <td className="r1c3 reset" style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }} ></td>:
        <td className="r1c3 reset" style={{backgroundColor:'rgba(255, 255, 255,.6)' }} ></td>
       }
      </tr>
      <tr className="row2 ">
      { bgvalue===314 ?
        <td className="r2c1 reset " style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }}  ></td>:
        <td className="r2c1 reset " style={{backgroundColor:'rgba(255,255, 255,.6)' }}  ></td>}
       {bgvalue===315?
        <td className="r2c2 reset" style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }} ></td>:
        <td className="r2c2 reset" style={{backgroundColor:'rgba(255, 255, 255,.6)' }} ></td>
       }
       { bgvalue===316?
        <td className="r2c3 reset" style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }} ></td>:
        <td className="r2c3 reset" style={{backgroundColor:'rgba(255, 255, 255,.6)' }} ></td>
       }
      </tr>
      <tr className="row3 ">
      { bgvalue===317 ?
        <td className="r3c1 reset " style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }}  ></td>:
        <td className="r3c1 reset " style={{backgroundColor:'rgba(255,255, 255,.6)' }}  ></td>}
       {bgvalue===318?
        <td className="r3c2 reset" style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }} ></td>:
        <td className="r3c2 reset" style={{backgroundColor:'rgba(255, 255, 255,.6)' }} ></td>
       }
       { bgvalue===319?
        <td className="r3c3 reset" style={{boxShadow :'1px 1px 10px 10px rgba(255, 255, 0,.5) inset' }} ></td>:
        <td className="r3c3 reset" style={{backgroundColor:'rgba(255, 255, 255,.6)' }} ></td>
       }
      
      </tr>
      </tbody>
                 </table>}
                 {gameans===1 && 
                 <div className="gameresult" style={{background:`url(${ttcrbg}) no-repeat center/cover`}}><p>{gameans1}</p></div>}
                  </div>

            }
            {screen===4&&<div className="settings">
                <img alt="" className="settingicon" src={settingimg}></img>
                <h3>Settings</h3></div>}
            {screen===2 &&<div className="music">
             <div className="musicmenu">
                 <div className="musicmenuleft">
                 <div className="time">
               
               <p >VG</p>
            <div className="navicons">
            <p>{time.toTimeString().substring(0,5)}</p>
            <i className="fa fa-battery-half " aria-hidden="true"></i>
                </div>
                    </div>
                     <div className="musicheading"><h4>Music</h4></div>
                     {
                         bgvalue===21?
                         <div className="musicoptn1" style={{backgroundColor:'rgba(0, 0, 255,.6)'}}><p>All Songs</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="musicoptn1"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>All Songs</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     {
                         bgvalue===22?
                         <div className="musicoptn2" style={{backgroundColor:'rgba(0, 0, 255,.6)'}}><p>Artist</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="musicoptn2"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>Artist</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     {
                         bgvalue===23?
                         <div className="musicoptn3" style={{backgroundColor:'rgba(0, 0, 255,.6)'}}><p>Album</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="musicoptn3"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>Album</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
              
                 </div>
                 <div className="musicmenuright" style={{background:`url(${musicimg}) no-repeat center/cover`}} ></div>
             </div>
             </div>}

            {screen ===21&& <div className="allsongs">
            <div className="allsongsmenu" style={{background :`url(${songlistimg}) no-repeat center/cover`}}>
                     <div className="allsongsheading"><h4><span>S</span>ongs</h4></div>
                    <div className="allsongslist">
                    {
                         bgvalue===211?
                         <div className="coverflowoptn1 song1" style={{backgroundColor:'rgba(0, 0, 255,.6)' }}><p>1. We don't talk anymore</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn1 song1"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>1. We don't talk anymore</p><i className="material-icons">arrow_forward_ios</i></div>
                  }
                     {
                         bgvalue===212?
                         <div className="coverflowoptn song2" style={{backgroundColor:'rgba(0, 0, 255,.6)' }}><p>2. Hate me</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn song2"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>2. Hate me</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     {
                         bgvalue===213?
                         <div className="coverflowoptn song3" style={{backgroundColor:'rgba(0, 0, 255,.6)' }}><p>3.  Scars to you beautiful</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn song3"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>3.  Scars to you beautiful</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     {
                         bgvalue===214?
                         <div className="coverflowoptn song4" style={{backgroundColor:'rgba(0, 0, 255,.6)' }}><p>4. Shape of you</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn song4"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>4. Shape of you</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     {
                         bgvalue===215?
                         <div className="coverflowoptn song5" style={{backgroundColor:'rgba(0, 0, 255,.6)' }}><p>5. Bad guy</p><i className="material-icons">arrow_forward_ios</i></div>:
                         <div className="coverflowoptn song5"style={{backgroundColor:'rgba(255, 255, 255,.65)'}}><p>5. Bad guy</p><i className="material-icons">arrow_forward_ios</i></div>
                     }
                     
                     </div>   
            </div>
            </div>}
            {screen ===22&& <div className="artist">
            <div className="artistheading"><h4>Artist</h4></div>
            <div className=" artistmenu">
                    <div className="artistmenu1">
                     {
                         bgvalue===221?
                         <div className="artistoptn artistoptn1" style={{boxShadow:'3px 3px 10px rgba(0, 0, 0,.6),5px 5px 10px red' , background:`url(${artist1}) no-repeat center/cover`}}></div>:
                         <div className="artistoptn artistoptn1" style={{boxShadow:'3px 3px 10px rgba(0, 0, 0,.6),5px 5px 10px grey',background:`url(${artist1}) no-repeat center/cover`}}></div>
                     }
                     {
                         bgvalue===222?
                         <div className="artistoptn artistoptn2" style={{boxShadow:`3px 3px 10px rgba(0, 0, 0,.6),5px 5px 10px yellow`,background:`url(${artist2}) no-repeat center/cover`}}></div>:
                         <div className="artistoptn artistoptn2"style={{boxShadow:'3px 3px 10px rgba(0, 0, 0,.6),5px 5px 10px grey',background:`url(${artist2}) no-repeat center/cover`}}></div>
                     }
                    </div> 
                    <div className="artistmenu2">
                           
                     {
                         bgvalue===223?
                         <div className="artistoptn artistoptn3" style={{boxShadow:`3px 3px 10px rgba(0, 0, 0,.6),5px 5px 10px green`,background:`url(${artist3}) no-repeat center/cover`}}></div>:
                         <div className="artistoptn artistoptn3"style={{boxShadow:'3px 3px 10px rgba(0, 0, 0,.6),5px 5px 10px grey',background:`url(${artist3}) no-repeat center/cover`}}></div>
                     }
                     {
                         bgvalue===224?
                         <div className="artistoptn artistoptn4" style={{boxShadow:`3px 3px 10px rgba(0, 0, 0,.6),5px 5px 10px blue`,background:`url(${artist4}) no-repeat center/cover`}}></div>:
                         <div className="artistoptn artistoptn4"style={{boxShadow:'3px 3px 10px rgba(0, 0, 0,.6),5px 5px 10px grey',background:`url(${artist4}) no-repeat center/cover`}}></div>
                     }
                    
                    </div>    
                 </div>
            </div>}

            {screen===211&&
            <div className="musicplayer">
                <div className="musicplayerupper">
                    <div className="musicplayerimage" style={{background:`url(${songpic})` , backgroundSize:'cover'}}></div>
                    
                    <div className="musicplayerinfo">
                        <h3>{songname}</h3>
                        <p>{singername}</p>
                    </div>
                </div>
               <audio className="musicplayerlower"  type="audio/mp3"  src={audio} controls autoPlay/> 
            </div>}
          </div>}

          {sidebarans===true && extra===0 && <div className="menuleft">
               <div className="time">
               
               <p >VG</p>
            <div className="navicons">
            <p>{time.toTimeString().substring(0,5)}</p>
            <i className="fa fa-battery-half  " aria-hidden="true"></i>
                </div>
                    </div>
                <div className="heading"><h4>iPod</h4></div>
                {
                    bgvalue===1?
                    <div className="optn1" style={{backgroundColor:'rgba(0, 0, 255,.6)'}} ><p>Cover Flow</p><i className="material-icons">arrow_forward_ios</i></div>:
                    <div className="optn1" style={{backgroundColor:'rgba(255, 255, 255,.65)'}} ><p>Cover Flow</p><i className="material-icons">arrow_forward_ios</i></div>
                }
                 {
                    bgvalue===2?
                    <div className="optn2" style={{backgroundColor:'rgba(0, 0, 255,.6)'}} ><p>Music</p><i className="material-icons">arrow_forward_ios</i></div>:
                    <div className="optn2" style={{backgroundColor:'rgba(255, 255, 255,.65)'}} ><p>Music</p><i className="material-icons">arrow_forward_ios</i></div>
                }
                 {
                    bgvalue===3?
                    <div className="optn3" style={{backgroundColor:'rgba(0, 0, 255,.6)'}} ><p>Games</p><i className="material-icons">arrow_forward_ios</i></div>:
                    <div className="optn3" style={{backgroundColor:'rgba(255, 255, 255,.65)'}} ><p>Games</p><i className="material-icons">arrow_forward_ios</i></div>
                }
                 {
                    bgvalue===4?
                    <div className="optn4" style={{backgroundColor:'rgba(0, 0, 255,.6)'}} ><p>Settings</p><i className="material-icons">arrow_forward_ios</i></div>:
                    <div className="optn4" style={{backgroundColor:'rgba(255, 255, 255,.65)'}} ><p>Settings</p><i className="material-icons">arrow_forward_ios</i></div>
                }
           
            </div>}
            {sidebarans===true &&<div className="menuright" style={{background:`url(${water}) no-repeat center/cover`}}></div>}
            </div>
        <div className="facecontainer">
            <div className="face" onMouseMove={mouseMove} >
                <div className="facecenter" id="stop" onClick={enter}></div>
                <div className="div1" onClick={menuclick} ><p>Menu</p></div>
                <div className="div2"><p><i className="material-icons">play_arrow pause</i></p></div>
               <div className="center">
                <div className="div3"><p><i className="material-icons">fast_forward</i></p></div>
                <div className="div4"><p><i className="material-icons">fast_rewind</i></p></div>
               </div>
                
            </div>
        </div>
       </div>
    
      );
   
     
}
 
export default Ipod;


/*
sidebarans  
0   wallpaper
1   main menu

screen               
0   main menu
1   coverflow
2   music
3   games
4   settings

211-music/allsongs

bgvalue
1,2,3,4      - coverflow,music,games,settings
11,12,13,14  - wallpaper names
21,22,23     - All Songs, Artist,Album

flag
1,2,3 - optn no.

flag1
0-  main menu
1-  coverflow menu
2-  music menu



call move(e,value)
dwnld images
*/