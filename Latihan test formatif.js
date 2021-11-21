import React, { Component } from 'react';
import './App.css';

render(){
		var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		
		return(
		<div>
				Isi array angka :
			<ul> 
				{angka.map((item, index) => (
				<li>Indek ke - {index} : {item * 2}</li>
				))}
			</ul>
		</div>
		);
	}
