<template>
  <div id="detalle-usuario" v-if="userData != null">
    <h2 class="text-center mb-2">Detail User {{ userData.id }}</h2>
    <div class="view-container">
      <h3>Main details</h3>
      <div class="dx-field">
        <div class="dx-field-label">ID:</div>
        <div class="dx-field-value">
          <DxTextBox :value="userData.id" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Name:</div>
        <div class="dx-field-value">
          <DxTextBox :value="userData.name" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Username:</div>
        <div class="dx-field-value">
          <DxTextBox :value="userData.username" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Email:</div>
        <div class="dx-field-value">
          <DxTextBox :value="userData.email" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <h3>Adress</h3>
      <div class="dx-field">
        <div class="dx-field-label">Street:</div>
        <div class="dx-field-value">
          <DxTextBox :value="address.street" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Suite:</div>
        <div class="dx-field-value">
          <DxTextBox :value="address.suite" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">City:</div>
        <div class="dx-field-value">
          <DxTextBox :value="address.city" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Zipcode:</div>
        <div class="dx-field-value">
          <DxTextBox :value="address.zipcode" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <h3>Localization</h3>
      <div class="dx-field">
        <div class="dx-field-label">Lat:</div>
        <div class="dx-field-value">
          <DxTextBox :value="geo.lat" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Lng:</div>
        <div class="dx-field-value">
          <DxTextBox :value="geo.lng" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Phone:</div>
        <div class="dx-field-value">
          <DxTextBox :value="userData.phone" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Website:</div>
        <div class="dx-field-value">
          <DxTextBox :value="userData.website" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <h3>Company</h3>
      <div class="dx-field">
        <div class="dx-field-label">Name:</div>
        <div class="dx-field-value">
          <DxTextBox :value="company.name" :read-only="true"> </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Slogan:</div>
        <div class="dx-field-value">
          <DxTextBox :value="company.catchPhrase" :read-only="true">
          </DxTextBox>
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Business:</div>
        <div class="dx-field-value">
          <DxTextBox :value="company.bs" :read-only="true"> </DxTextBox>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <router-link to="/" id="return-btn" class="text-center">
        <button @click="navigate" @keypress.enter="navigate" role="link">
          Return to Users' table
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { usersService } from '@/services/users_service.js';
import DxTextBox from 'devextreme-vue/text-box';

export default {
  name: 'UserDetail',
  components: {
    DxTextBox,
  },
  data() {
    return {
      userData: {},
      address: {},
      geo: {},
      company: {},
    };
  },
  methods: {
    async getData(id) {
      await usersService.getUserDetail(id).then((response) => {
        this.dataSource = response;
        this.printData(this.dataSource);
      });
    },
    printData(data) {
      if (data == null) this.GoBack();
      if (data == null) return null;

      this.userData = data;
      this.address = data.address;
      this.geo = data.address.geo;
      this.company = data.company;
    },
    GoBack() {
      this.$router.push({
        name: 'UsersTable',
      });
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.getData(this.$route.params.id);
    } else {
      const url = window.location.href;
      const id = url.split('-').slice(-1)[0];
      this.getData(id);
    }
  },
};
</script>