import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
 
	// 添加点击方法
	showWall(e){
		//定义div获取节点数组
		let div = document.getElementsByClassName('circular'); 
		//若节点中class列表中不存在墙壁突出显示样式则添加，反之则移除
		if(!div[e].classList.contains("wallShow")){
			div[e].className +=" wallShow"; 		
		}else{
			div[e].setAttribute("class", "circular");
		}
	}
	// 定义样式类数据表
	constructor() {
	  this.opt.forEach(element => {
		let s_x=1300;
		let s_y=1300;
		let x=element['x']+s_x;
		let y=element['y']+s_y;
		let width=(element['r'])*2;
		let zIndex=element['zIndex'];
		let time={
		  "top":x+'px',
		  "left":y+'px',
		  "width":width+'px',
		  "height":width+'px',
		  "background": element["background"],
		  "z-index":zIndex  
	  };
		this.opt_style.push(time);
	  });
	}
	// 定义围墙数据，并添加不同背景颜色以便区分
	opt_style:any=[];
	  opt:any=[
		{ "x": 0, "y": 0, "r": 1000 ,background:"#7BC"},
		{ "x": -500, "y": 0, "r": 400 ,background:"#4D9CB0"},
		{ "x": -700, "y": 0, "r": 100 ,background:"#256271"},
		{ "x": -350, "y": 0, "r": 150 ,background:"#25714C"},
		{ "x": 0, "y": 750, "r": 200 ,background:"#0A502E"},
		{ "x": 0, "y": -500, "r": 100 ,background:"#99D265",zIndex:1},
		{ "x": 0, "y": -500, "r": 200 ,background:"#d3d3d3"},
		{ "x": 500, "y": 0, "r": 300 ,background:"#444"},
		{ "x": 350, "y": 0, "r": 50 ,background:"#555"},
		{ "x": 630, "y": -100, "r": 100 ,background:"#666"},
		{ "x": 1000, "y": 1000, "r": 250 ,background:"#888"}
	  ];
  }