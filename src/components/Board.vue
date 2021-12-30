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
             <div class="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
               <!-- <img src="assets/img/bg-img/logohexa.png" alt=""> -->
               <h1 class="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">Gentle Formal Looks </h1>
               <p class="mb-5 fs-1">We provide the top formal apparel package to make your job look confident and comfortable. Stay connect.</p>
               <div class="d-grid gap-2 d-md-block"><a class="btn btn-lg btn-dark" href="#!" role="button">Explore Collection</a></div>
             </div>
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
</style>

