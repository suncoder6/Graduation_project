<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
                        <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="合同编号" prop="hetongbianhao">
            <el-input v-model="ruleForm.hetongbianhao" 
                placeholder="合同编号" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.hetongbianhao" label="合同编号" prop="hetongbianhao">
              <el-input v-model="ruleForm.hetongbianhao" 
                placeholder="合同编号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="房屋名称" prop="fangwumingcheng">
          <el-input v-model="ruleForm.fangwumingcheng" 
              placeholder="房屋名称" clearable  :readonly="ro.fangwumingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="房屋名称" prop="fangwumingcheng">
              <el-input v-model="ruleForm.fangwumingcheng" 
                placeholder="房屋名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="房屋类型" prop="fangwuleixing">
          <el-input v-model="ruleForm.fangwuleixing" 
              placeholder="房屋类型" clearable  :readonly="ro.fangwuleixing"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="房屋类型" prop="fangwuleixing">
              <el-input v-model="ruleForm.fangwuleixing" 
                placeholder="房屋类型" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="小区" prop="xiaoqu">
          <el-input v-model="ruleForm.xiaoqu" 
              placeholder="小区" clearable  :readonly="ro.xiaoqu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="小区" prop="xiaoqu">
              <el-input v-model="ruleForm.xiaoqu" 
                placeholder="小区" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="月租价格" prop="yuezujiage">
          <el-input v-model="ruleForm.yuezujiage" 
              placeholder="月租价格" clearable  :readonly="ro.yuezujiage"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="月租价格" prop="yuezujiage">
              <el-input v-model="ruleForm.yuezujiage" 
                placeholder="月租价格" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="租用月数" prop="zuyongyueshu">
          <el-input v-model="ruleForm.zuyongyueshu" 
              placeholder="租用月数" clearable  :readonly="ro.zuyongyueshu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="租用月数" prop="zuyongyueshu">
              <el-input v-model="ruleForm.zuyongyueshu" 
                placeholder="租用月数" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="租用金额" prop="zuyongjine">
          <el-input v-model="ruleForm.zuyongjine" 
              placeholder="租用金额" clearable  :readonly="ro.zuyongjine"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="租用金额" prop="zuyongjine">
              <el-input v-model="ruleForm.zuyongjine" 
                placeholder="租用金额" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="押金" prop="yajin">
          <el-input v-model="ruleForm.yajin" 
              placeholder="押金" clearable  :readonly="ro.yajin"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="押金" prop="yajin">
              <el-input v-model="ruleForm.yajin" 
                placeholder="押金" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="房租状态" prop="fangzuzhuangtai">
          <el-select v-model="ruleForm.fangzuzhuangtai" placeholder="请选择房租状态">
            <el-option
                v-for="(item,index) in fangzuzhuangtaiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="房租状态" prop="fangzuzhuangtai">
	      <el-input v-model="ruleForm.fangzuzhuangtai"
                placeholder="房租状态" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="合同金额" prop="hetongjine">
            <el-input v-model="hetongjine"
                placeholder="合同金额" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.hetongjine" label="合同金额" prop="hetongjine">
              <el-input v-model="ruleForm.hetongjine" 
                placeholder="合同金额" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info'" label="合同内容" prop="hetongneirong">
          <file-upload
          tip="点击上传合同内容"
          action="file/upload"
          :limit="1"
          :multiple="true"
          :fileUrls="ruleForm.hetongneirong?ruleForm.hetongneirong:''"
          @change="hetongneirongUploadChange"
          ></file-upload>
        </el-form-item>  
        <div v-else>
          <el-form-item v-if="ruleForm.hetongneirong" label="合同内容" prop="hetongneirong">
            <el-button type="text" size="small" @click="download(ruleForm.hetongneirong)">下载</el-button>
          </el-form-item>
        </div>    
      </el-col>      
                                    <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="生效日" prop="shengxiaori">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.shengxiaori" 
                type="date"
                placeholder="生效日">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.shengxiaori" label="生效日" prop="shengxiaori">
              <el-input v-model="ruleForm.shengxiaori" 
                placeholder="生效日" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="有限期至" prop="youxianqizhi">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.youxianqizhi" 
                type="date"
                placeholder="有限期至">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.youxianqizhi" label="有限期至" prop="youxianqizhi">
              <el-input v-model="ruleForm.youxianqizhi" 
                placeholder="有限期至" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="用户名" prop="yonghuming">
          <el-input v-model="ruleForm.yonghuming" 
              placeholder="用户名" clearable  :readonly="ro.yonghuming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="用户名" prop="yonghuming">
              <el-input v-model="ruleForm.yonghuming" 
                placeholder="用户名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
          <el-input v-model="ruleForm.lianxidianhua" 
              placeholder="联系电话" clearable  :readonly="ro.lianxidianhua"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="联系电话" prop="lianxidianhua">
              <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="房主账号" prop="fangzhuzhanghao">
          <el-input v-model="ruleForm.fangzhuzhanghao" 
              placeholder="房主账号" clearable  :readonly="ro.fangzhuzhanghao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="房主账号" prop="fangzhuzhanghao">
              <el-input v-model="ruleForm.fangzhuzhanghao" 
                placeholder="房主账号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="房主姓名" prop="fangzhuxingming">
          <el-input v-model="ruleForm.fangzhuxingming" 
              placeholder="房主姓名" clearable  :readonly="ro.fangzhuxingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="房主姓名" prop="fangzhuxingming">
              <el-input v-model="ruleForm.fangzhuxingming" 
                placeholder="房主姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                                                                                                        </el-row>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    
    
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"rgba(152, 129, 129, 1)","inputBorderRadius":"22px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"22px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"22px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"#606266","addEditBoxColor":"rgba(210, 194, 194, 0.29)","dateIconFontSize":"14px","btnSaveBgColor":"#409EFF","uploadIconFontColor":"#8c939d","textareaBorderColor":"rgba(152, 129, 129, 1)","btnCancelBgColor":"rgba(143, 222, 143, 1)","selectLableColor":"#606266","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"22px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"#606266","dateBorderColor":"rgba(152, 129, 129, 1)","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"22px","inputBgColor":"rgba(252, 250, 250, 1)","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"22px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"rgba(152, 129, 129, 1)","inputBorderColor":"rgba(152, 129, 129, 1)","uploadBorderColor":"rgba(152, 129, 129, 1)","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"1px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"22px","selectFontColor":"#606266","btnSaveBorderColor":"#409EFF","btnSaveBorderWidth":"1px"},
      id: '',
      type: '',
      ro:{
	hetongbianhao : false,
	fangwumingcheng : false,
	fangwuleixing : false,
	xiaoqu : false,
	yuezujiage : false,
	zuyongyueshu : false,
	zuyongjine : false,
	yajin : false,
	fangzuzhuangtai : false,
	hetongjine : false,
	hetongneirong : false,
	shengxiaori : false,
	youxianqizhi : false,
	yonghuming : false,
	lianxidianhua : false,
	fangzhuzhanghao : false,
	fangzhuxingming : false,
	sfsh : false,
	shhf : false,
	ispay : false,
      },
            ruleForm: {
                        hetongbianhao: this.getUUID(),
                        	        fangwumingcheng: '',
	                        	        fangwuleixing: '',
	                        	        xiaoqu: '',
	                        	        yuezujiage: '',
	                        	        zuyongyueshu: '',
	                        	        zuyongjine: '',
	                        	        yajin: '',
	                        	        fangzuzhuangtai: '',
	                        	        hetongjine: '',
	                        	        hetongneirong: '',
	                        	        shengxiaori: '',
	                        	        youxianqizhi: '',
	                        	        yonghuming: '',
	                        	        lianxidianhua: '',
	                        	        fangzhuzhanghao: '',
	                        	        fangzhuxingming: '',
	                        	                        	        shhf: '',
	                        	                      },
                                                                                                                                        fangzuzhuangtaiOptions: [],
                                                                                                                                                                              rules: {
                  hetongbianhao: [
                                    	                                                              ],
                  fangwumingcheng: [
                                    	                                                              ],
                  fangwuleixing: [
                                    	                                                              ],
                  xiaoqu: [
                                    	                                                              ],
                  yuezujiage: [
                                    	                                                              ],
                  zuyongyueshu: [
                                    	                                                              ],
                  zuyongjine: [
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
                  yajin: [
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
                  fangzuzhuangtai: [
                                    	                                                              ],
                  hetongjine: [
                                    	                                                              ],
                  hetongneirong: [
                                    	                                                              ],
                  shengxiaori: [
                                    	                                                              ],
                  youxianqizhi: [
                                    	                                                              ],
                  yonghuming: [
                                    	                                                              ],
                  lianxidianhua: [
                                    	                                                              ],
                  fangzhuzhanghao: [
                                    	                                                              ],
                  fangzhuxingming: [
                                    	                                                              ],
                  sfsh: [
                                    	                                                              ],
                  shhf: [
                                    	                                                              ],
                  ispay: [
                                    	                                                              ],
              }
    };
  },
  props: ["parent"],
  computed: {
                                                                                                                            hetongjine: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    get: function () {
        return 0+parseFloat(this.ruleForm.zuyongjine)+parseFloat(this.ruleForm.yajin) || ''
      }
    },
                                                                                                                                  },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
        // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          	            if(o=='hetongbianhao'){
            this.ruleForm.hetongbianhao = obj[o];
	    this.ro.hetongbianhao = true;
            continue;
          }
	            	            if(o=='fangwumingcheng'){
            this.ruleForm.fangwumingcheng = obj[o];
	    this.ro.fangwumingcheng = true;
            continue;
          }
	            	            if(o=='fangwuleixing'){
            this.ruleForm.fangwuleixing = obj[o];
	    this.ro.fangwuleixing = true;
            continue;
          }
	            	            if(o=='xiaoqu'){
            this.ruleForm.xiaoqu = obj[o];
	    this.ro.xiaoqu = true;
            continue;
          }
	            	            if(o=='yuezujiage'){
            this.ruleForm.yuezujiage = obj[o];
	    this.ro.yuezujiage = true;
            continue;
          }
	            	            if(o=='zuyongyueshu'){
            this.ruleForm.zuyongyueshu = obj[o];
	    this.ro.zuyongyueshu = true;
            continue;
          }
	            	            if(o=='zuyongjine'){
            this.ruleForm.zuyongjine = obj[o];
	    this.ro.zuyongjine = true;
            continue;
          }
	            	            if(o=='yajin'){
            this.ruleForm.yajin = obj[o];
	    this.ro.yajin = true;
            continue;
          }
	            	            if(o=='fangzuzhuangtai'){
            this.ruleForm.fangzuzhuangtai = obj[o];
	    this.ro.fangzuzhuangtai = true;
            continue;
          }
	            	            if(o=='hetongjine'){
            this.ruleForm.hetongjine = obj[o];
	    this.ro.hetongjine = true;
            continue;
          }
	            	            if(o=='hetongneirong'){
            this.ruleForm.hetongneirong = obj[o];
	    this.ro.hetongneirong = true;
            continue;
          }
	            	            if(o=='shengxiaori'){
            this.ruleForm.shengxiaori = obj[o];
	    this.ro.shengxiaori = true;
            continue;
          }
	            	            if(o=='youxianqizhi'){
            this.ruleForm.youxianqizhi = obj[o];
	    this.ro.youxianqizhi = true;
            continue;
          }
	            	            if(o=='yonghuming'){
            this.ruleForm.yonghuming = obj[o];
	    this.ro.yonghuming = true;
            continue;
          }
	            	            if(o=='lianxidianhua'){
            this.ruleForm.lianxidianhua = obj[o];
	    this.ro.lianxidianhua = true;
            continue;
          }
	            	            if(o=='fangzhuzhanghao'){
            this.ruleForm.fangzhuzhanghao = obj[o];
	    this.ro.fangzhuzhanghao = true;
            continue;
          }
	            	            if(o=='fangzhuxingming'){
            this.ruleForm.fangzhuxingming = obj[o];
	    this.ro.fangzhuxingming = true;
            continue;
          }
	            	            	            	                    }
                                                                                                                                                                                                                                                                                                                                              }
            // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          } else {
          this.$message.error(data.msg);
        }
      });
                                                                                                                                                                                          this.fangzuzhuangtaiOptions = "租赁中,已退租".split(',')
                                                                                                                                                                                                                                  },
                                                                                                                                                                        // 多级联动参数
                                                                                                                                                                                                                    info(id) {
      this.$http({
        url: `hetongxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.ruleForm = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
        // 提交
    onSubmit() {
                  // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
              this.ruleForm.hetongjine = this.hetongjine
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                                                                                                                                                                                                                                                                                                                                                                                                            this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `hetongxinxi/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.hetongxinxiCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.hetongxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
                                                                                                                                                hetongneirongUploadChange(fileUrls) {
                this.ruleForm.hetongneirong = fileUrls;
				this.addEditUploadStyleChange()
            },
                                                                                                                        	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & ::v-deep .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
