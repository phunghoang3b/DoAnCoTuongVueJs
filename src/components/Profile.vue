<template>
<div class="body-profile">
  <h1 class="title">Thông tin chiến tướng</h1>
  <div class="wrapper">
      <div class="left">
          <img src="assets/img/bg-img/backgoung.jpg"
          alt="user" width="100">
          <h4>{{info.username}}</h4>
          <a href="/update"  class="update-btn">Cập nhật thông tin</a>
      </div>
      <div class="vl"></div>
      <div class="right">
          <div class="info">
              <h3>Thông tin người chơi</h3>
              <div class="info_data">
                  <div class="data">
                      <h4>Email</h4>
                      <p>{{info.email}}</p>
                  </div>
                  <div class="data">
                    <h4>Họ và tên</h4>
                      <p>{{info.fullname}}</p>
                    </div>

              </div>
          </div>
        <div class="projects">
              <h3>Các chỉ số</h3>
              <div class="projects_data">
                <div class="data">
                  <h4>Số trận thắng</h4>
                  <p>{{info.win}}</p>
                </div>
                <div class="data">
                  <h4>Số trận thua</h4>
                  <p>{{info.lose}}</p>
                </div>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Profile',
    data() {
    return {
      info:""
    };
  },
  created (){
    const KhoaId = sessionStorage.getItem("key");
    const This = this;
    console.log(KhoaId)
    axios
        .post("hexachess/infomation.php", {
          id: KhoaId
        })
        .then(function (response) {
          This.info = response.data[0]
          console.log(This.info)
        })
        .catch(function (error) {
          console.log(error);
        });
  },
  methods: {
  },
}
</script>

<style>
.title{
  color: #fff;
  position: relative;
  top: 10%;
  text-transform: uppercase;
}
.vl {
  border-left: 6px solid #f2f2f2;
  height: 330px;
  border-radius: 5px;
}
.body-profile{
  background-image: url(https://i.imgur.com/xrupsGz.jpg);
  height: 663px;
}
.update-btn{
  display: inline-block;
  padding: 12px 50px;
  color: #fff;
  border: 2px solid orange;
  border-radius: 6px;
  margin-top: 10px;
  transition: .3s linear;
}
.update-btn:hover{
  background: orange;
  color: #111;
  font-weight: bold;
}
.wrapper{
  display: flex;
  box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
  background-color: rgba(0,0,0,0.6);
  align-items: center;
  margin-top: 6%;
  margin-bottom: 7%;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 10px; 
}
.wrapper .left{ 
  width: 30%;
  padding: 30px 25px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
}
.wrapper .left img{
  border-radius: 0px;
  margin-bottom: 10px;
  width: 35%;
}
.wrapper .left h4{
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
}
.wrapper .left p{
  font-size: 12px;
  color: #fff;
}
.wrapper .right{
  width: 70%;
  height: 30%;
  background-color: rgba(0,0,0,0.1);
  padding: 30px 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.wrapper .right .info,
.wrapper .right .projects{
  margin-bottom: 25px;
}
.wrapper .right .info h3,
.wrapper .right .projects h3{
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e0e0e0;
    color: orange;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.wrapper .right .info_data,
.wrapper .right .projects_data{
  display: flex;
  justify-content: space-between;
}
.wrapper .right .info_data .data,
.wrapper .right .projects_data .data{
  width: 45%;
  margin-top: 10px;
}
.wrapper .right .info_data .data h4,
.wrapper .right .projects_data .data h4{
    font-size: 30px;
    color: #fff;
    margin-bottom: 5px;
}
.wrapper .right .info_data .data p,
.wrapper .right .projects_data .data p{
  font-size: 25px;
  margin-bottom: 10px;
  color: #fff;
}
</style>