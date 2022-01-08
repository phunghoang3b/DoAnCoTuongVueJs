<template>
  <div class="container-listroom" style="background-image:url(assets/img/bg-img/backgoung.jpg);background-size:cover;">
      <img src="assets/img/bg-img/DANHSACHPHONG.png" alt="">
      <div class="function-btn">
        <div class="search-container">
          <input type="text" name="search" placeholder="Tìm kiếm..." class="search-input">
          <a href="#" class="search-btn" style="color:black">
            O   
          </a>
        </div>
        <button class="btn-create" @click="ClickCreateNewRoom">Tạo bàn mới</button>
        <div class="list-Room">
          <div class="" v-for="data in DataRoom" :key="data">
            <!-- nơi chứa danh sách phòng -->
            <a href="#" style="fontSize:20px;" @click="ClickJoinRoom(data.RoomName)">{{ data.RoomName }}</a>
          </div>
        </div>
      </div>
  </div>
  <div class="space" style="margin-bottom:663px"></div>
</template>

<script>
import { io } from "socket.io-client";
export default {
  name: 'ListRoom', 
  data(){
    return{
      min: 1000,
      max: 9999,
      isGetRoom: true,
      DataRoom: [],
      strRoomName: "xin chào",
      strUsername: ""
    }
  },

  created(){ // Khởi tạo socket kết nối tới server

    this.socketInstance = io("http://localhost:3000/");
    this.socketInstance.emit("socketClientSendRequestListRoom", this.isGetRoom);
    this.LoadRoom();
    
    this.strUsername = sessionStorage.getItem("key"); // Tạo biến để chứa tên tài khoản
    console.log("Tài khoản hiện đang đăng nhập vào trang: "+ this.strUsername);
    // this.socketInstance.emit("socketClientSendUsername", this.strUsername);
  },

  methods: {
    LoadRoom: function () {
      const push = this.DataRoom;

      this.socketInstance.on("socketServerSendRequestListRoom", function (Data) {
        // console.log("Nhận dữ liệu danh sách phòng từ server: " + Data[1].roomname);

        console.log("Nhận tổng số phòng: " + Data.length)

        for(let i=0; i<Data.length; i++)
        {
          push.push({
            RoomName: Data[i].roomname,
          });
          console.log("Tên phòng thứ "+ i+ ": "+ Data[i].roomname)
        }
      });
    },
    ClickCreateNewRoom(){
      
      this.socketInstance.emit("socketClientCreateNewRoom", this.strUsername); // Gửi dữ liệu tên chủ phòng từ client đến server

      this.socketInstance.on("socketServerSendChangePageToBoard", function (DataServerSend) {
        if(DataServerSend.isCheckChange){ 
          alert("Bạn tạo phòng thành công với tên: " + DataServerSend.NewRoomName);
          // this.$router.push('/board'); //Phần chuyển trang này chưa làm được

          window.location.href = "http://localhost:8080/board";
          //Còn chưa xử lý xuất ra danh sách phòng từ CSDL
          sessionStorage.setItem("roomNameCreatedHost", DataServerSend.NewRoomName); // Gán tên cho chủ phòng
        }
      })
    },

    ClickJoinRoom(roomName){
      sessionStorage.setItem("roomNameGuestJoin", roomName); //Lấy tên phòng khi người chơi 
      sessionStorage.setItem("GuestJoinRoom", sessionStorage.getItem("key"))
      window.location.href = "http://localhost:8080/board";
    },

    //Random
    GenerateNumber: function () {
      return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
    }
  }
}
</script>

<style scoped>
  .list-Room{
    position: fixed;
    width: 1300px;
    border-radius: 25px;
    background-color: rgba(0,0,0,0.7);
    box-shadow: 0 0 17px #333;
    margin: 9% auto;
    height: 470px;
    margin-left: 16.2%;
  }
  .container-listroom{
    height: 663px;
    position: fixed;
    width: 100%;
  }
  .container-listroom img{
    position: fixed;
    width: 34%;
    height: 17%;
    left: 33%;
  }
  .search-container{
    position: fixed;
    top: 25%;
    left: 16.2%;
    background: #fff;
    height: 30px;
    border-radius: 30px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.8s;
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}
.search-container:hover > .search-input{
    width: 400px;
}
.search-container .search-input{
  background: transparent;
  border: none;
  outline:none;
  width: 0px;
  font-weight: 500;
  font-size: 16px;
  transition: 0.8s;
}
@keyframes hoverShake {
  0% {transform: skew(0deg,0deg);}
  25% {transform: skew(5deg, 5deg);}
  75% {transform: skew(-5deg, -5deg);}
  100% {transform: skew(0deg,0deg);}
}
.search-container:hover{
  animation: hoverShake 0.15s linear 3;
}
.btn-create{
    position: fixed;
    width: 6%;
    height: 35px;
    border-radius: 10px;
    background: none;
    border: 3px solid yellow;
    color: white;
    top: 25%;
    left: 77.8%;
    font-weight: bold;
}
@media (max-width: 1000px){
  .list-Room{
    width: 850px;
    right: 5.5%;
    top: 17%;
  }
  .container-listroom img{
    height: 15%;
    width: 45%;
    left: 29%;
  }
  .search-container{
    top: 22%;
    left: 5.5%;
  }
  .btn-create{
    top: 22%;
    left: 81.4%;
    width: 13%;
  }
}
</style>