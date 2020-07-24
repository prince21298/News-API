import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      articles:[]
    }
  }
  componentDidMount(){
    fetch('http://newsapi.org/v2/everything?q=apple&from=2020-07-08&to=2020-07-08&sortBy=popularity&apiKey=be328b0eefa3487a9b59db5c9daad86b')
    .then((response)=>{
      return response.json()
    })
    .then((myJson)=>{
        // console.log(myJson  )
        this.setState({ 
          articles:myJson.articles
        })
    })
  }
  render() {
    console.log(this.state);
    return (
      // <div>
        // <div className='header'>
        //   <header>
        //     <h1>NEWS  </h1>
        //   </header>
        // </div>
      //    <div className='maindiv'>
      //   <h2 style={{textAlign:'left'}}>
      //   Fix This iPhone Battery Bug by Ditching Apple Music
      //   </h2>
      //   <img src='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/t1iqiuy7aei9okurdnqw.jpg' style={{width:'50vw'}}/>
      //   <b>Brendan Hesse</b>  
      //   <p>Cases of an odd battery-draining iOS bug are on the rise and the Apple Music app appears to be the culprit, with reports showing that the app can rapidly eat up to 95 percent of a device’s battery for no reason. The issue affects a wide variety of iOS devices</p>
      //   <p>2020-07-08T21:00:00Z</p>
      //   <a href='https://lifehacker.com/fix-this-iphone-battery-bug-by-ditching-apple-music-1844311035'><button>Read More...</button></a>
      //   </div>
      // </div>
      <div className='news'>
        <div className='header'>
          <header>
            <h1>NEWS  </h1>
          </header>
        </div>
        {this.state.articles.map((item,index)=>{
          return <div className='maindiv'>
            <h2 className="title" style={{textAlign:'left'}}>
              {item.title}
            </h2>
            <img className='img' src={item.urlToImage}/>
            <p className="author"><b>{item.author}</b></p>  
            <p>{item.description}</p><br/>
            <p>{item.publishedAt}</p>
            <a className='readmore' href={item.url}><button><b>Read More...</b></button></a>
            <br/>
          </div>
        })}
      </div>
    )
  }
}
