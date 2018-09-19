<template>
  <div class="contact">
    <h1>Contact me</h1>
     <!--FORM-->
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="exampleInputGroup1"
                        label="Email address:"
                        label-for="exampleInput1"
                        description="We'll never share your email with anyone else.">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="Enter email">
            </b-form-input>
          </b-form-group>

          <b-form-group id="exampleInputGroup2"
                        label="Full Name:"
                        label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="Enter name">
            </b-form-input>
          </b-form-group>
          
          <b-form-group id="exampleInputGroup3"
                        label="Subject:"
                        label-for="exampleInput3">
            <b-form-input id="exampleInput3"
                          type="text"
                          v-model="form.subject"
                          required
                          placeholder="Enter subject">
            </b-form-input>
          </b-form-group>

          <b-form-group id="exampleInputGroup4"
                        label="Country:"
                        label-for="exampleInput4">
            <b-form-input id="exampleInput4"
                          type="text"
                          v-model="form.country"
                          required
                          placeholder="Enter country">
            </b-form-input>
          </b-form-group>

          <b-form-group id="exampleGroup5">
            <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div><!--Finish FORM -->
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      msg: "Haydee Arbieto",
      form: {
        email: "",
        name: "",
        subject: "",
        country: "",
        checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();

      this.form.email = "";
      this.form.name = "";
      this.form.subject = "";
      this.form.country = "";
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>