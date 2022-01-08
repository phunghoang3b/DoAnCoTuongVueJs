<template>
  <div class="BodyUpdate">
      <div class="FormUpdate">
          <h2>Thông Tin</h2>
          <div class="ContentUpdate">
            <div class="form-group">
                <label>Tên đăng nhập</label>
                <input type="text" class="form-control form-control-lg" placeholder="Nhập tên đăng nhập ..."/>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" placeholder="Nhập Địa chỉ email ..."/>
            </div>
            <div class="form-group">
                <label>Mật khẩu</label>
                <input type="password" class="form-control form-control-lg" placeholder="Nhập Mật khẩu ..."/>
            </div><br>
            <button type="submit" class="btn btn-lg btn-block btnUpdate">
                Cập Nhật
            </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'UpdateProfile'
}
</script>

<style scoped>
    .BodyUpdate{
        height: 663px;
        background-image: url(https://i.imgur.com/eaAPr0t.jpg);
        background-size: cover;
    }
    .FormUpdate{
        width: 675px;
        border-radius: 25px;
        background-color: rgba(0,0,0,0.7);
        box-shadow: 0 0 17px #333;
        height: 560px;
        margin-left: 32.4%;
        position: relative;
        top: 8%;
    }
    .FormUpdate h2{
        color: orange;
        top: 7%;
        position: relative;
        font-family: cursive;
        font-size: 45px;
    }
    .ContentUpdate{
        position: relative;
        top: 11%;
    }
    .ContentUpdate label{
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        position: relative;
    }
    .ContentUpdate input{
        width: 75%;
        left: 12%;
        position: relative;
    }
    .btnUpdate{
        width: 30%;
        left: 35%;
        position: relative;
        font-weight: bold;
        background-image: linear-gradient(to right, #70A611, #CCC91B);
    }
    @media (max-width: 1000px){
        .FormUpdate{
            right: 18%;
        }
    }
</style>