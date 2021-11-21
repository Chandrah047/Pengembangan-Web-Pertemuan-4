import React, { Component } from 'react'; 
import './App.css'; 
import './css/bootstrap.min.css';
import Home from './views/Home/Home'; 
import About from './views/About/About';
import Help from './views/Help/Help';
import Profil from './views/Profil/Profil';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Latihan 4.7, Parameter router
class App extends Component {   
  render() {     
    return (       
    <Router> 
        <div> 
          <Link to="/home">Home</Link> &nbsp; 
          <Link to="/about">About</Link> &nbsp; 
          <Link to="/help">Help</Link> &nbsp;  
          <Link to="/profil/Budi">Budi</Link> &nbsp; 
          <Link to="/profil/Ali">Ali</Link> &nbsp; 
          <Link to="/profil/Susi">Susi</Link> &nbsp;  

          <Route path="/" exact component={Home}/> 
          <Route path="/home" component={Home} /> 
          <Route path="/about" component={About} /> 
          <Route path="/help" component={Help} />  
          <Route path="/profil/:nama" component={Profil} /> 
        </div> 
      </Router> 
    ); 
  } 
}  

export default App; 

//Latihan 4.6, Membuat navigasi sederhana dengan memanfaatkan react router

//class App extends Component {   
// render() {     
//   return (       
//    <Router> 
//       <div> 
//         <Link to="/home">Home</Link> &nbsp; 
//         <Link to="/about">About</Link> &nbsp; 
//         <Link to="/help">Help</Link> &nbsp;  

//         <Route path="/" exact component={Home}/> 
//         <Route path="/home" component={Home} /> 
//         <Route path="/about" component={About} /> 
//         <Route path="/help" component={Help} />  
//        </div> 
//      </Router> 
//    ); 
//  } 
//}  
//
//export default App; 


//Latihan 4.5, Menghapus data state mahasiswa 
// class App extends Component {   
//   deleteData(index){
//     var data_tmp = this.state.mahasiswa;
//     data_tmp.splice(index, 1);
//     this.setState({
//       mahasiswa : data_tmp
//     }) 
//   }

// 	constructor(){     
// 		super(); 

//   this.state = {       
//     mahasiswa : [],       
//     nama : null,      
//     nim : null,       
//     nilai : null 
//     } 
//   }  

//   setValueState(event){     
//     this.setState({ 
//       [event.target.name] : event.target.value 
//     }) 
//   } 

//   addData(){     
//   var data_tmp = this.state.mahasiswa;     
//   data_tmp.push({nim : this.state.nim, nama : this.state.nama, nilai : this.state.nilai});     
//   this.setState({       
//     mahasiswa : data_tmp 
//         }) 
//       }      
      
//       render() {     
//         return ( 
//           <div className="container"> 
//             <div className="form-container"> 
//               <div className="form-group"> 
//                 <label>Nim:</label> 
//                 <input type="text" name="nim" value={this.state.nim} onChange={this.setValueState.bind(this)} className="form-control" />           </div> 
//               <div className="form-group"> 
//                 <label>Nama:</label> 
//                 <input type="text" name="nama" value={this.state.nama} onChange={this.setValueState.bind(this)} className="form-control" />           </div> 
//               <div className="form-group"> 
//                 <label>Nilai:</label> 
//                 <input type="number" name="nilai" value={this.state.nilai} onChange={this.setValueState.bind(this)} className="form-control" /> 
//               </div> 
//               <button onClick={this.addData.bind(this)} type="button" className="btn btn-primary">Submit</button> 
//             </div> 
//             <br /> 

//             {/* cetak data mahasiswa ke table */} 
//             <table className="table"> 
//               <thead> 
//                 <tr><th>No.</th><th>Nim</th><th>Nama</th><th>Nilai</th></tr> 
//               </thead> 
//               <tbody> 
                
//             {this.state.mahasiswa.map((mhs, index)=>( 
//               <tr key={index}> 
//                 <td>{index+1}</td><td>{mhs.nim}</td> 
//                 <td>{mhs.nama}</td><td>{mhs.nilai}</td> 
//                 <td><button onClick={this.deleteData.bind(this, index)} className="btn btn-sm btn-danger">Hapus</button></td> 
//               </tr> 
//             ))} 

//               </tbody> 
//             </table> 
//             </div> 
//          ); 
//        } 
//      }  
      
// export default App; 

//Latihan 4.4, Menjalankan perintah penambahan data array dan update nilai state 
// class App extends Component {   
	
// 	constructor(){     
// 		super(); 

//   this.state = {       
//     mahasiswa : [],       
//     nama : null,      
//     nim : null,       
//     nilai : null 
//     } 
//   }  

//   setValueState(event){     
//     this.setState({ 
//       [event.target.name] : event.target.value 
//     }) 
//   } 

//   addData(){     
//   var data_tmp = this.state.mahasiswa;     
//   data_tmp.push({nim : this.state.nim, nama : this.state.nama, nilai : this.state.nilai});     
//   this.setState({       
//     mahasiswa : data_tmp 
//         }) 
//       }      
      
//       render() {     
//         return ( 
//           <div className="container"> 
//             <div className="form-container"> 
//               <div className="form-group"> 
//                 <label>Nim:</label> 
//                 <input type="text" name="nim" value={this.state.nim} onChange={this.setValueState.bind(this)} className="form-control" />           </div> 
//               <div className="form-group"> 
//                 <label>Nama:</label> 
//                 <input type="text" name="nama" value={this.state.nama} onChange={this.setValueState.bind(this)} className="form-control" />           </div> 
//               <div className="form-group"> 
//                 <label>Nilai:</label> 
//                 <input type="number" name="nilai" value={this.state.nilai} onChange={this.setValueState.bind(this)} className="form-control" /> 
//               </div> 
//               <button onClick={this.addData.bind(this)} type="button" className="btn btn-primary">Submit</button> 
//             </div> 
//             <br /> 

//             {/* cetak data mahasiswa ke table */} 
//             <table className="table"> 
//               <thead> 
//                 <tr><th>No.</th><th>Nim</th><th>Nama</th><th>Nilai</th></tr> 
//               </thead> 
//               <tbody> 
//                 {this.state.mahasiswa.map((mhs, index)=>( 
//                   <tr key={index}> 
                    
//     <td>{index+1}</td><td>{mhs.nim}</td><td>{mhs.nama}</td><td>{mhs.nilai}</td> 
//                   </tr> 
//                 ))} 
//               </tbody> 
//             </table> 
//             </div> 
//          ); 
//        } 
//       }  
// export default App; 


//  </div>Latihan 4.3, Membuat array multidimensi
// class App extends Component { 
//     render() {    
// 	var data = [ 
//     {nama : 'Budi', nilai : 80}, 
//     {nama : 'Ali', nilai : 85}, 
//     {nama : 'Susi', nilai : 87} 
//    ] 
//     return ( 
//       <table border="1"> 
//         <thead> 
//           <tr><th>No.</th><th>Nama</th><th>Nilai</th></tr> 
//         </thead> 

//         <tbody> 
//           {data.map((item, index)=>( 
//             <tr key={index}> 
//               <td>{index + 1}</td><td>{item.nama}</td><td>{item.nilai}</td> 
//             </tr> 
//           ))} 
//         </tbody> 
//       </table> 
//     ); 
//   } 
// }  
// export default App; 


//Latihan 4.2, Membuat array associative, dan merender nilainya
// class App extends Component { 
//     render() 
// 	{var mahasiswa = {
// 		nama : "Susi", 
// 		nim : "162110001", 
// 		email : "susi@mikroskil.ac.id"
// 	}     

// 	return ( 
//       <table> 
//         <tr><td>Nim</td><td>:</td><td>{mahasiswa.nim}</td></tr> 
//         <tr><td>Nama</td><td>:</td><td>{mahasiswa.nama}</td></tr> 
//         <tr><td>Email</td><td>:</td><td>{mahasiswa.email}</td></tr> 
//       </table> 
//     ); 
//   } 
// }  

// export default App; 


//Latihan 4.1
//  class App extends Component { 
//      render() {     var angka = [1,2,3]    
// 	 var nama = ["Budi", "Ali", "Susi"]     
// 	 var campuran = ["Budi", 1, "Ali", 2, "Susi", 3]     
// 	 return ( 
//       <div> 
//         Isi array angka : 
//         <ul> 
//           {angka.map((item, index)=>( 
//             <li>Indeks ke - {index} : {item}</li>           
// 			))} 
//         </ul> 
 
//         Isi array nama : 
//         <ul> 
//           {nama.map((item, index)=>( 
//             <li>Indeks ke - {index} : {item}</li>           
// 			))} 
//         </ul> 
 
//         Isi array campuran : 
//         <ul> 
//           {campuran.map((item, index)=>( 
//             <li>Indeks ke - {index} : {item}</li>           
// 			))} 
//         </ul> 
//       </div> 
//     ); 
//   } 
// } 
