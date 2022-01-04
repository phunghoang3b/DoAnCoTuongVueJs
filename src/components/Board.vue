<template>
   <main class="main" id="top">
     <section>
       <div class="container">
         <div class="row h-100 g-0">
          <div class="col-md-6">
             <div class="card card-span h-100 text-white">
               <div class="test" style="width: 100%;">
                  <img v-for="src in hinh" :src="src.hinh" :style="src.vitri" :key="src" alt="" style="position: absolute;">
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
         <div id="todo-list-example">
          <input
            v-model="newTodoText"
            v-on:keyup.enter="addNewTodo"
            placeholder="Thêm việc cần làm"
          >
          <todo-item
            v-for="(hinh, vitri) in hinh"
              v-bind:key="hinh"
              v-bind:title="hinh.title"
              v-on:remove="todos.splice(vitri, 1)">
          </todo-item>
        </div>
       </div>
     </section>
   </main>
</template>

<script>
//import a from '@/Test/class'
import test from '@/Test/test.js'
const mang = test;

// for (let i = 0; i < mang.length; i++) {
// var p = mang[i].vitri;
// $('.test').append('<img src="' + mang[i].hinh + '" class="' + mang[i].id + ' ' + mang[i].loai + '"  alt="" style="position: absolute; left: ' + p.left + 'px; top: ' + p.top + 'px">');


export default {
  name: 'Board',
  data() {
    // for (let i = 0; i < mang.length; i++) {
    //   const p = mang[i].vitri;
    //   hinh: [
    //     {
    //       hinh: mang[i].hinh,
    //       vitri: 'left: ' + p.left + 'px; top: ' + p.top + 'px'
    //     }
    //   ]
    // }
    return {
      mangi: 11, 
      hinh: [
        {
          hinh: mang[0].hinh,
          vitri: 'left: ' + mang[0].vitri.left + 'px; top: ' + mang[0].vitri.top + 'px'
        },
        {
          hinh: mang[1].hinh,
          vitri: 'left: ' + mang[1].vitri.left + 'px; top: ' + mang[1].vitri.top + 'px'
        },
        {
          hinh: mang[2].hinh,
          vitri: 'left: ' + mang[2].vitri.left + 'px; top: ' + mang[2].vitri.top + 'px'          
        },
        {
          hinh: mang[3].hinh,
          vitri: 'left: ' + mang[3].vitri.left + 'px; top: ' + mang[3].vitri.top + 'px'
        },
        {
          hinh: mang[4].hinh,
          vitri: 'left: ' + mang[4].vitri.left + 'px; top: ' + mang[4].vitri.top + 'px'
        },
        {
          hinh: mang[5].hinh,
          vitri: 'left: ' + mang[5].vitri.left + 'px; top: ' + mang[5].vitri.top + 'px'
        },
        {
          hinh: mang[6].hinh,
          vitri: 'left: ' + mang[6].vitri.left + 'px; top: ' + mang[6].vitri.top + 'px'
        },
        {
          hinh: mang[7].hinh,
          vitri: 'left: ' + mang[7].vitri.left + 'px; top: ' + mang[7].vitri.top + 'px'
        },
        {
          hinh: mang[8].hinh,
          vitri: 'left: ' + mang[8].vitri.left + 'px; top: ' + mang[8].vitri.top + 'px'
        },
        {
          hinh: mang[9].hinh,
          vitri: 'left: ' + mang[9].vitri.left + 'px; top: ' + mang[9].vitri.top + 'px'
        },
        {
          hinh: mang[10].hinh,
          vitri: 'left: ' + mang[10].vitri.left + 'px; top: ' + mang[10].vitri.top + 'px'
        }     
      ]
    }
  },
  // methods: {
  //   addNew: function(){
  //     this.hinh.push({
  //       hinh: mang[this.mangi++].hinh,
  //       vitri: 'left: ' + mang[this.mangi++].vitri.left + 'px; top: ' + mang[this.mangi++].vitri.top + 'px'
  //     })
  //   }
  // }
  
  // a(){
  //   return {
  //     test
  //   }
  // }
}
</script>

<style>
  .main{
    margin-bottom: 30px;
    margin-top: 30px;
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
</style>
