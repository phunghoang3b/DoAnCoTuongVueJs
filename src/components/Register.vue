<template>
  <div class="vue-tempalte">
    <form class="body-login">
      <div class="content-login">
        <h3>Đăng Ký</h3><br>
        <div class="form-group">
          <label>Họ và Tên:</label>
          <input
            type="username"
            class="form-control form-control-lg"
            placeholder="Họ và tên ..."
          />
        </div>
        <div class="form-group">
          <label>Tên đăng nhập:</label>
          <input
            type="username"
            class="form-control form-control-lg"
            placeholder="Tên đăng nhập ..."
          />
        </div>
        <div class="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Mật khẩu ..."
          />
        </div><br>
        <button type="submit" class="btn btn-lg btn-block btn1">
          Đăng ký
        </button>
        <label class="lbl-reg">Bạn đã có tài khoản ? &nbsp;<a href="/login">Đăng Nhập</a></label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register'
};
</script>

<style scoped>
.vue-tempalte{
  display: flex;
  height: 663px;
  justify-content: center;
  background-image: url(https://i.imgur.com/91Oj0DG.jpg);
  background-size: cover;
}
.body-login{
    width: 35%;
    position: relative;
    background-color: rgba(0,0,0,0.5);
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    height: 570px;
    margin: auto;
    border-radius: 10px;
}
.content-login{
    position: relative;
    display: inline-block;
    top: 8%;
    width: 80%;
}
.content-login h3{
  color: #fff;
  font-size: 40px;
}
.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;

}
.form-group label{
  color: #fff;
  font-size: 20px;
}
.btn1{
  width: 55%;
  position: relative;
  margin: auto;
  margin-bottom: 17px;
  background-image: linear-gradient(to right, #ffd080, #e28743);
  font-weight: bold;
}
.content-login .lbl-reg{
  color: #ffd080;
  font-size: 15px;
}
.content-login .lbl-reg a{
  font-size: 15px;
}
</style>
