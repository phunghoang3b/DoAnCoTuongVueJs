<template>
  <div
    class="container-chat"
    style="background-image: url(assets/img/bg-img/test.png); background-size: inherit;">
    <h2>Cùng Hexa-Chess thỏa sức trò chuyện và bàn chiến thuật !</h2>
    <div class="body-chat">
      <!-- nơi chứa nội dung chat -->
      <div class="main-banner" id="top">
        <div class="video-overlay header-text">
          <div class="caption" style="text-align: left">
            <div class="chat-container">
              <div class="chat-header">
                <div class="logo">
                  <i></i>
                  <h3>Chat</h3>
                </div>
                <p id="your-name">Tên của bạn</p>
              </div>
              <!--  -->
              <div class="chat-section">
                <div class="main-wrapper">
                  <div class="chat-content">
                    <div ref="refMessageBoardChat" v-for="data in MsgInBoard" :key="data.id">
                      <b>
                        {{ data.user }}
                      </b>
                      : {{ data.text }}
                    </div>
                    <div>
                      {{ dataChat }}
                    </div>
                    <div v-for="data in DataChat" :key="data">
                      <b>
                        {{ data.user }}
                      </b>
                      : {{ data.text }}
                    </div>
                  </div>
                  <!--  -->
                  <form class="msg-tex">
                    <input
                      type="text"
                      name="msg"
                      ref="msgField"
                      id="msg"
                      placeholder="Nhập nội dung..."
                      autocomplete="off"
                    />
                    <button @click="btnClickSendMsg" id="btn-send">
                      <i class="glyphicon">Send</i>
                    </button>&nbsp;
                    <a href="">Mời</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Import thư viện server
import { io } from "socket.io-client";
export default {
  name: "Chat",
  data() {
    return {
      idinputMsgField: null,
      MsgInBoard: [],
      DataChat: [],
      dataChat: "",
    };
  },

  created() {
    this.socketInstance = io("http://localhost:3000/");
    this.LoadMessage();
  },

  methods: {
    LoadMessage: function () {
      const push = this.DataChat;

      this.socketInstance.on("socketServerSendDataToClient", function (Data) {
        console.log(
          "Nhận nội dung từ máy khác: " + Data.text + " " + Data.user
        );
        push.push({
          user: Data.user,
          text: Data.text,
        });
      });
    },
    btnClickSendMsg(e) {
      e.preventDefault();

      //Lấy giá trị của trường nhập dữ liệu tin nhắn
      const refinputMsgField = this.$refs.msgField.value;

      console.log("Nội dung từ máy cá nhân: " + refinputMsgField); //Kiểm tra nội dung vừa nhập là gì

      this.AddMessage(); // Gọi phương thức nối nội dung chat

      const DataMessageUserAndText = {
        // Tạo dữ liệu để gửi sang server
        id: new Date().getTime(),
        text: this.$refs.msgField.value,
        user: "Temp",
      };

      //Gửi dữ liệu từ client sang server
      this.socketInstance.emit(
        "socketClientSendDataToServer",
        DataMessageUserAndText
      );

      this.$refs.msgField.value = ""; //Sửa nội dung rỗng cho trường chat

      if (refinputMsgField == "")
        //Kiểm tra có nhập nội dung hay không
        alert("Bạn chưa nhập nội dung");
    },

    AddMessage() {
      //Tạo phương thức nối nội dung
      // const data = {
      //     id: new Date().getTime(),
      //     text: this.$refs.msgField.value,
      //     user:"Temp"
      // }

      // //Nối chuỗi
      // this.MsgInBoard = this.MsgInBoard.concat(data);
      this.DataChat.push({
        user: "Temp",
        text: this.$refs.msgField.value,
      });
    },
  },
};
</script>

<style>
    .container-chat{
        height: 663px;
        display: flex;
    }
    .container-chat h2{
        position: absolute;
        top: 13%;
        left: 20%;
        text-transform: uppercase;
        color: #111;
        font-family: cursive;
        border-radius: 10px;
        background-color: yellow;
    }
    .body-chat{
        width: 1620px;
        border-radius: 25px;
        background-color: rgba(0,0,0,0.8);
        box-shadow: 0 0 17px #333;
        margin: 5% auto;
        height: 512px;
    }
    
    *{
    margin:0;
    padding:10;
    box-sizing: border-box;
    
}

* {
  margin: 0;
  padding: 10;
  box-sizing: border-box;
}

.chat-container {
  width: 100%;
  border-radius: 10px;
  box-shadow: 2px 9px 25px #0b2a5b;
  overflow: hidden;
  border: 1px solid #0b2a5b;
  background: #0d3575;
}

.chat-header {
  min-height: 50px;
  overflow: hidden;
  background-color: #0b2a5b;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #051b3f;
}

.chat-header .logo {
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: rgb(81, 184, 243);
}

.logo h3 {
  color: rgb(81, 184, 243);
  letter-spacing: 2px;
  margin-left: 10px;
}

.chat-header p {
  margin-right: 20px;
  cursor: pointer;
  opacity: 0.8;
}

.chat-section {
  padding: 20px;
}

.main-wrapper {
  width: 100%;
  height: 420px;
}

.chat-content {
  width: 100%;
  height: 370px;
  background: white;
  overflow-y: auto;
  box-shadow: inset 0 0 1px #111;
  padding: 0 10px 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  scrollbar-width: none;
}

.msg-tex a{
  width: 15%;
  text-align: center;
  background-color: #e28743;
  height: 39px;
  padding: 10px;
  font-size: 16px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

/* .chat-container .message{
    width:100%;
    min-height: 450px;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
} */

.message-row {
  display: grid;
  grid-template-columns: 70%;
  margin-bottom: 10px;
}

.you-message {
  justify-content: end;
  justify-items: end;
}

.other-message {
  justify-content: start;
  justify-items: start;
}

.message-text {
  padding: 9px 14px;
  margin-bottom: 5px;
}

.message-time {
  font-size: 13px;
  color: #777;
}

.you-message .message-text {
  background: #0048aa;
  color: white;
  border: 1px solid #0048aa;
  border-radius: 14px 14px 0 14px;
}

.other-message .message-text {
  background: #eee;
  color: black;
  border: 1px solid #ddd;
  border-radius: 14px 14px 14px 0;
}

.message-title span {
  font-size: 12px;
  text-transform: capitalize;
}

.msg-tex {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.msg-tex input,
.msg-tex button {
  flex: 4;
  height: 40px;
  outline: none;
  border: 1px solid #888;
  padding: 0 10px;
  border-radius: 3px;
}

.msg-text button {
  flex: 1;
  max-width: 120px;
  cursor: pointer;
  color: rgb(81, 184, 243);
}
::-webkit-scrollbar {
  display: none;
}
</style>