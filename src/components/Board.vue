<template>
  <!-- <button @click="showModal">Show modal</button>
  <Modal :model-value="true" :close="closeModal" :disabled="!isShow">
    <div class="modal">
      <p>change v-show</p>
      <button @click="closeModal">close</button>
    </div>
  </Modal> -->
   <main class="main" id="top">
     <section>
       <div class="container">
         <div class="row h-100 g-0">
          <div class="col-md-6">
             <div class="card card-span h-100 text-white">
               <div class="test">
                 <h1></h1>
                  <img @load="loadCo" @click="clickCo(co)" v-for="co in hinh" :id="co.id" :src="co.hinh" :style="co.vitri" :class="co.class" :key="co" alt="" style="position: absolute;">
                  <img @click="clickDiChuyen(src)" v-for="src in dot" :src="src.hinh" :style="src.vitri" :class="src.class" :key="src" alt="" style="position: absolute;">
                  <img class="card-img h-100" src="coduyluan/Banco.png" alt="..." />
                  <a class="stretched-link" href="#!"></a>
               </div>
              </div>
           </div>
           <div class="col-md-6" style="background-color: #E09637;border-top-right-radius: 10px;border-bottom-right-radius: 10px;">
             <!-- <div class="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
               <img src="assets/img/bg-img/logohexa.png" alt="" class="hinh-anh">
               <h1 class="solo-header">Solo Chiến Thuật </h1>
               <div class="page">
                  <div class="field">
                     <div class="label">
                        Người Chơi 1
                     </div>
                     <input type="text">
                  </div>
                  <div class="field">
                     <div class="label">
                        Người Chơi 2
                     </div>
                     <input type="Number">
                  </div>
                  <div class="field btns">
                     <button class="prev-1 prev">Previous</button>
                     <button class="next-1 next">Next</button>
                  </div>
               </div>
             </div> -->
             <img src="assets/img/bg-img/logohexa.png" alt="" class="hinh-anh">
             <h1 class="solo-header">Solo Chiến Thuật </h1>
             <div class="player">
               <div class="col-md-12">
                 <div class="col-md-6" id="member1">Người Chơi 1
                   <p>Nguyễn Hoàng Khải</p>
                 </div>
                 <div class="col-md-6" id="member2">Người Chơi 2
                   <p>Phạm Duy Luân</p>
                 </div>
               </div>
             </div>
             <div class="button-role">
               <button class="snip1582">Bỏ Cuộc</button>
               <button class="snip1582">Undo</button>
               <button class="snip1582">Redo</button>
             </div>
             <div class="chat-game">
               <h3>Chat Vui Nào !</h3>
               <input type="text" style="display:inline-block">&nbsp;
               <button>Gửi</button>
               <textarea name="" id="" cols="65" rows="5" style="border-radius:10px"></textarea>
             </div>
             <p style="color: yellow;font-size: 20px;">----======{(-_-)}======----</p>
           </div>
         </div>
       </div>
     </section>
   </main>
</template>

<script>
//Import thư viện server
import { io } from "socket.io-client";
import mang from '@/Test/test.js'
import MaTran from '@/Test/MaTranBanCo.js'
import TinhNuocDi from '@/Test/TinhNuocDi.js'

export default {
  components: { },
  name: 'Board',
  data() {
    return {
      isShow: true,
      mangi: 1,
      hinh: [
        {
          i:0,
          id: mang[0].id,
          hinh: mang[0].hinh,
          vitri: 'left: ' + mang[0].vitri.left + 'px; top: ' + mang[0].vitri.top + 'px',
          class: mang[0].id + ' ' + mang[0].loai
        }    
      ],
      dot: [
        {
          quanco: null,
          hinh: null,
          vitri: null,
          class: null,
          left: null,
          top: null,
          x: null,
          y: null
        }
      ],
      DataQuanCo: []
    }
  },
  created() {
    this.socketInstance = io("http://localhost:3000/");
    //const push = this.DataQuanCo;
    const Hinh = this.hinh;
    this.socketInstance.on("socketClientSendDataQuanCoToServer", function (Data) {
      console.log(
        "Nhận nội dung từ máy khác: " + Data.x +  "-" + Data.y + " " + Data.user
      );
      if (Data.CoBiAn != -1) {
        if (mang[Data.CoBiAn].id == "tuong") {
          alert("Bạn đã thua");
        }else{
          if (mang[Data.CoBiAn].id == "tuong_do") {
            alert("Bạn đã thua");
          }else Hinh[Data.CoBiAn].hinh = null;
        }
      }
      MaTran[Data.Yold][Data.Xold].id = "";
      MaTran[Data.y][Data.x].id = mang[Data.quanCo].id;
      Hinh[Data.quanCo].vitri = 'left: ' + Data.left + 'px; top: ' + Data.top + 'px';

      // push.user = Data.user;
      // push.x = Data.x;
      // push.y = Data.y;
      // push.quanCo = Data.quanCo;
      // // push.splice(0); //Xóa dữ liệu nước đi cũ
      // // push.push({
      // //   user: Data.user,
      // //   x: Data.x,
      // //   y: Data.y
      // // });
    });
  },
  methods: {
    loadCo: function(){
      if (this.mangi < 32) {
          this.hinh.push({
            i: this.mangi,
            id: mang[this.mangi].id,
            hinh: mang[this.mangi].hinh,
            vitri: 'left: ' + mang[this.mangi].vitri.left + 'px; top: ' + mang[this.mangi].vitri.top + 'px',
            class: mang[this.mangi].id + ' ' + mang[this.mangi++].loai,
        })
      }
    },
    clickCo: function(src){
      const loaico = src.class.split(" ");
      var x,y;
      for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
          if (MaTran[i][j].id == loaico[0]) {
            x = j;
            y = i;
          }
        }
      }
      var NuocDi = new Array();
      NuocDi = TinhNuocDi(loaico[0], loaico[1], x, y);
      //Xóa dấu dot cũ
      this.dot.splice(0);

      for (let i = 0; i < NuocDi.length; i++) {
        this.dot.push({
          quanco: src,
          hinh: '/coduyluan/dot.png',
          vitri: 'left: ' + MaTran[NuocDi[i].top][NuocDi[i].left].left + 'px; top: ' + MaTran[NuocDi[i].top][NuocDi[i].left].top + 'px; margin-left:8px; margin-top: 6px',
          class: 'dropimage' + i + '',
          left: MaTran[NuocDi[i].top][NuocDi[i].left].left,
          top: MaTran[NuocDi[i].top][NuocDi[i].left].top,
          x: NuocDi[i].left,
          y: NuocDi[i].top
        })
      }
    },
    clickDiChuyen: function(src){
      const loaico = src.quanco.class.split(" ");
      const ConCoHienTai = src.quanco.i;
      const left = src.left;
      const top = src.top;
      const x = src.x;
      const y = src.y;
      this.hinh[ConCoHienTai].vitri = 'left: ' + left + 'px; top: ' + top + 'px';
      //alert(this.hinh[ConCoHienTai].id);
      //Xóa dấu dot cũ
      this.dot.splice(0);
      //Xóa con cờ ở điểm cũ
      var vXold, vYold;
      for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
          if (MaTran[i][j].id == loaico[0]) {
            MaTran[i][j].id = "";
            vYold = i;
            vXold = j;
          }
        }
      }
      //Ăn cờ
      if (MaTran[y][x].id != "") {
        for (let i = 0; i < mang.length; i++) {
          if (MaTran[y][x].id == mang[i].id) {
            if (loaico[1] != mang[i].loai) {
              if (mang[i].id == "tuong") {
                alert("Bạn đã chiến thắng");
              } else {
                if (mang[i].id == "tuong_do") {
                  alert("Bạn đã chiến thắng");
                }
                else {
                  this.hinh[i].hinh = null;
                  MaTran[y][x].id = mang[ConCoHienTai].id;
                  this.SendData(ConCoHienTai, x, y, vXold, vYold, left, top, i);
                }
              }
            }
          }
        }
      } else {
        MaTran[y][x].id = mang[ConCoHienTai].id;
        //Truyền dữ liệu nước đi
        this.SendData(ConCoHienTai, x, y, vXold, vYold, left, top, -1);
      }
    },
    SendData(dataCo, dataX, dataY, dataXold, dataYold, dataLeft, dataTop, dataCoBiAn) {
      const DataChess = {
        // Tạo dữ liệu để gửi sang server
        id: new Date().getTime(),
        user: "Temp",
        quanCo: dataCo,
        x: dataX,
        y: dataY,
        Xold: dataXold,
        Yold: dataYold,
        left: dataLeft,
        top: dataTop,
        CoBiAn: dataCoBiAn
      };

      //Gửi dữ liệu từ client sang server
      this.socketInstance.emit(
        "socketClientSendDataQuanCoToServer",
        DataChess
      );
      console.log('Truyền dữ liệu nước đi');
    }
  }
}
</script>

<style scoped>
  .test{
    width: 94%;
    position: absolute;
    top: 18px;
    left: 18px;
  }
  .main{
    margin-bottom: 25px;
    margin-top: 25px;
  }
  .hinh-anh{
    position: relative;
    width: 15%;
    top: 2%;
    border-radius: 50%;
  }
  .solo-header{
    position: relative;
    top: 5%;
    font-size: 30px;
  }
  .player{
    position: relative;
    top: 6%;
  }
  .player p{
    background-color: white;
    height: 50px;
    border-radius: 10px;
    padding: 12px;
    margin-top: 12px;
    font-size: 16px;
    font-weight: bold;
    color: black;
  }
  #member1, #member2{
    font-size: 18px;
    font-weight: bold;
    color: yellow;
    display:inline-block;
  }
  .button-role{
    position: relative;
    margin-top: 7%;
  }
  .snip1582 {
  background-color: #c47135;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'BenchNine', Arial, sans-serif;
  font-size: 1em;
  font-size: 14px;
  line-height: 1em;
  margin: 10px 20px;
  outline: none;
  padding: 12px 30px 10px;
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
}
.snip1582:before,
.snip1582:after {
  border-color: transparent;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-style: solid;
  border-width: 0;
  content: "";
  height: 24px;
  position: absolute;
  width: 24px;
}
.snip1582:before {
  border-color: #c47135;
  border-top-width: 2px;
  left: 0px;
  top: -5px;
}
.snip1582:after {
  border-bottom-width: 2px;
  border-color: #c47135;
  bottom: -5px;
  right: 0px;
}
.snip1582:hover,
.snip1582.hover {
  background-color: #c47135;
}
.snip1582:hover:before,
.snip1582.hover:before,
.snip1582:hover:after,
.snip1582.hover:after {
  height: 100%;
  width: 100%;
}
.chat-game{
  position: relative;
  margin-top: 4%;
}
.chat-game h3{
  font-family: 'Monaco', cursive;
}
.chat-game input{
    display: inline-block;
    width: 70%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 32px;
    position: relative;
    margin-bottom: 5px;
}
.chat-game button{
  width: 16%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 32px;
  background-color: yellow;
  font-size: 16px;
  font-weight: bold;
}
.card-img {
  margin-top: -8px;
  display: inline-block;
}
</style>
