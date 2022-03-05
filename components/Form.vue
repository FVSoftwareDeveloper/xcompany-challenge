<template>
    <div class="col-sm-12">

          <form>

            <div class="col-sm-11">
              <div class="row">
            
                <div class="col-sm-11">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                          <label>Search Customer</label> 
                          <b-input 
                            id="txtsearch" 
                            v-model="txtsearch" 
                            type="text" 
                            value="" 
                            :class="[form, active5]"
                            required 
                          />
                      </div>
                  </div>
                </div>

                <div class="col-sm-1 mt-4 text-align:'left'">
                  <b-button variant="success" title="Add" @click="SearchCustomers">Search</b-button>
                </div>
            
              </div>

              <div class="row">
          
                <div class="col-sm-12">

                  <b-table striped hover selectable select-mode="single" :items="searchItems" @row-selected="onSelect">
                      <template #cell(selected)="{ rowSelected }">
                        <template v-if="rowSelected">
                          <span aria-hidden="true">&check;</span>
                          <span class="sr-only">Selected</span>
                        </template>
                        <template v-else>
                          <span aria-hidden="true">&nbsp;</span>
                          <span class="sr-only">Not selected</span>
                        </template>
                      </template>
                    </b-table>
                </div>
            
              </div>

            </div>

            <div class="row">
              
              <div class="col-sm-6">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <label>Tax ID</label>
                        <b-input 
                          id="txtrnc" 
                          v-model="txttaxid" 
                          type="number"
                          value="" 
                          maxlength="11" 
                          :class="[form, active]"
                          required 
                        />
                    </div>
                </div>
              </div>

            </div>

            <div class="row">

              <div class="col-sm-12">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <label>Name</label> 
                        <b-input 
                          id="txtname" 
                          v-model="txtname" 
                          type="text" 
                          value="" 
                          :class="[form, active1]"
                          required 
                        />
                    </div>
                </div>
              </div>

            </div>

            <div class="row mb-3">         
          
              <div class="col-sm-6">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <label>Phone</label>    
                        <b-input 
                          id="txtphone" 
                          v-model="txtphone" 
                          v-mask="'###-###-####'" 
                          type="text" 
                          value="" 
                          :class="[form, active2]"
                          required 
                        />
                    </div>
                </div>
              </div>
  
              <div class="col-sm-6">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <label>Email</label>    
                    <b-input 
                      id="txtemail" 
                      v-model="txtemail" 
                      type="email"
                      value="" 
                      :class="[form, active3]" 
                      @blur="validateEmail(txtemail)" 
                    />
                  </div>
                </div>
              </div>

            </div>
        
            <div class="row">
          
              <div class="col-sm-11">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <label>Address</label> 
                        <b-input 
                          id="txtname" 
                          v-model="txtaddress" 
                          type="text" 
                          value="" 
                          :class="[form, active4]"
                          required 
                        />
                    </div>
                </div>
              </div>

              <div class="col-sm-1 mt-4 text-align:'left'">
                <b-button variant="success" title="Add" @click="addAddress">+</b-button>
              </div>
          
            </div>


            <div class="row">
          
              <div class="col-sm-12">
                  <b-table striped hover :items="items"></b-table>
              </div>
          
            </div>


            <div class="row mb-5">
          
              <div class="col-sm-12">
                  <div class="row no-gutters align-items-right">
                      <div class="col mr-2 text-right">
                          <!-- <b-button type="button" name="btnCancelar" id="btnCancelar" value="Cancelar" class="d-none d-sm-inline-block btn btn-danger shadow-sm" /> -->
                          <b-button variant="danger" @click="cancelForm">Cancel</b-button>
                     
                          <!-- <b-button type="button" name="btnProcesar" id="btnProcesar" value="Guardar" class="d-none d-sm-inline-block btn btn-warning shadow-sm" /> -->
                          <b-button variant="success" @click="submitForm">Send</b-button>
                      </div>
                  </div>
              </div>
          
            </div>
        
          </form>

        </div>

</template>

<script>
import Vue from 'vue'
import VueMask from 'v-mask'
import FecthApi from '~/api/fecthApi'

Vue.use(VueMask)

export default {
  name: 'CustomerForm',
  data(){
    return {
      items: [],
      searchItems: [],
      txtid: 0,
      txttaxid: '',
      txtname: '',
      txtphone: '',
      txtemail:'',
      txtaddress: '',
      txtsearch:'',
      msg: [],
      form: 'form-control',
      active: '',
      active1: '',
      active2: '',
      active3: '',
      active4: '',
      active5: ''
    }
  },
  methods:{
    validateEmail(email) {
      
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.$data.active3 = '';
            this.$data.active3 = 'is-valid';
            return false;
        } else {
            this.$data.active3 = 'is-invalid';
            return true;
        }
    },
    addAddress(){
      // alert('add');
      if( this.$data.txtaddress.length > 0){
        this.$data.items.push({ Address : encodeURIComponent(this.$data.txtaddress) });
        this.$data.txtaddress = '';
      } else {
        this.$data.active4 = 'is-invalid';
      }
      
    },
    cancelForm(event){
      
        this.$data.txttaxid= '';
        this.$data.txtname= '';
        this.$data.txtphone= '';
        this.$data.txtemail='';
    },
    submitForm(){

      if(this.$data.txttaxid.length === 0){
        this.$data.active = 'is-invalid';
        return false;
      } else {
        this.$data.active = 'is-valid';
      }

      if(this.$data.txtname.length === 0){
        this.$data.active1 = 'is-invalid';
        return false;
      } else {
        this.$data.active1 = 'is-valid';
      }

      if(this.$data.txtphone.length === 0 && this.$data.txtphone.length < 12){
        this.$data.active2 = 'is-invalid';
        return false;
      } else {
        this.$data.active2 = 'is-valid';
      }

      if(this.validateEmail(this.$data.txtemail)){
        return false;
      }

      this.$swal.fire({
        title: 'Are you sure to save?',
        icon: 'info',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'YES',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:'NO',
        cancelButtonAriaLabel: 'Thumbs down'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          
          if(this.$data.txtid === 0){

            try{
              const fecth = new FecthApi();
              // const result = 
              fecth.SaveCustomer([{
                taxId: this.$data.txttaxid,
                name: this.$data.txtname,
                phone: this.$data.txtphone,
                email: this.$data.txtemail,
                address: [...this.$data.items]
              }]).then( response => {
                window.location.reload();
              });           

            } catch(e){
              throw new Error("Error:", e);
            }

          } else {

            try{
              const fecth = new FecthApi();
              // const result = 
              fecth.UpdateCustomer([{
                customerId: this.$data.txtid,
                taxId: this.$data.txttaxid,
                name: this.$data.txtname,
                phone: this.$data.txtphone,
                email: this.$data.txtemail,
                address: [...this.$data.items]
              }]).then( response => {
                window.location.reload();
              });           

            } catch(e){
              throw new Error("Error:", e);
            }

          }
          
            
        } 
        
      })  
    },
    async SearchCustomers(){
         
      const fecth = new FecthApi();
      const response = await fecth.SearchCustomers(this.txtsearch, this.$axios);
      this.$data.searchItems = response.data;

    },
    async onSelect(e){
            
      this.$data.txtid = e[0].id;
      this.$data.txttaxid = e[0].tax_id;
      this.$data.txtname = e[0].description;
      this.$data.txtphone = e[0].phone;
      this.$data.txtemail= e[0].email;

      const fecth = new FecthApi();
      const response = await fecth.SearchCustomerAddress(e[0].id, this.$axios);
      this.$data.items = response.data;

      this.$data.items.forEach((val, index) => {
        
        this.$data.items[index].Address = encodeURIComponent(val.Address)
      
      });

      // this.$data.searchItems = [];
      
      return false;
      
    }
  }
}
</script>