<template>
  <div>
    <div class="view-container">
      <div class="p-2">
        <div id="table-users">
          <h2 class="text-center mb-2">Users' Table</h2>
          <div class="mb-4" id="table-container">
            <DxLoadPanel
              :visible="loadingVisible"
              shading-color="rgba(0,0,0,0.4)"
            />
            <DxDataGrid
              id="datagrid"
              key-expr="id"
              :show-column-lines="true"
              :show-row-lines="true"
              :show-borders="true"
              :data-source="dataSource"
              :repaint-changes-only="true"
              :row-alternation-enabled="true"
              :column-min-width="100"
              @row-inserted="addUser"
            >
              <DxColumnChooser :enabled="true" mode="select" />
              <DxEditing
                :allow-updating="true"
                :allow-deleting="true"
                :allow-adding="true"
                :use-icons="true"
                mode="row"
              >
              </DxEditing>
              <DxHeaderFilter :visible="true" :allow-search="true" />
              <DxSearchPanel :visible="true" :placeholder="Search" />
              <DxColumn
                data-field="id"
                caption="Id User"
                :visible="false"
                :allow-editing="false"
              />
              <DxColumn data-field="name" caption="Name">
                <DxRequiredRule />
              </DxColumn>
              <DxColumn data-field="username" caption="Username">
                <DxRequiredRule />
              </DxColumn>
              <DxColumn data-field="email" caption="Email">
                <DxRequiredRule />
              </DxColumn>
              <DxColumn type="buttons" caption="Options">
                <DxButton
                  name="edit"
                  icon="more"
                  :hint="View"
                  :on-click="ViewUserDetail"
                />
                <DxButton
                  name="delete"
                  icon="trash"
                  :hint="Delete"
                  :on-click="DeleteUser"
                />
              </DxColumn>
              <DxScrolling column-rendering-mode="virtual" />
              <DxPaging :page-size="5" />
            </DxDataGrid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxHeaderFilter,
  DxSearchPanel,
  DxRequiredRule,
  DxScrolling,
  DxButton,
  DxEditing,
  DxColumnChooser,
  DxPaging,
} from 'devextreme-vue/data-grid'; // for table

import DxLoadPanel from 'devextreme-vue/load-panel'; // for Loading
import { usersService } from '@/services/users_service.js';

export default {
  components: {
    DxDataGrid,
    DxEditing,
    DxLoadPanel,
    DxColumn,
    DxHeaderFilter,
    DxSearchPanel,
    DxRequiredRule,
    DxScrolling,
    DxButton,
    DxColumnChooser,
    DxPaging,
  },
  data() {
    return {
      dataSource: [],
      loadingVisible: false,
    };
  },
  async created() {
    try {
      this.loadingVisible = true;
      await this.GetFullData();
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingVisible = false;
    }
  },
  methods: {
    async GetFullData() {
      await usersService.getUsers().then((response) => {
        this.dataSource = response;
      });
    },
    ViewUserDetail(data) {
      this.$router.push({
        name: 'UserDetail',
        params: {
          id: data.row.data.id,
          data: data.row.data,
        },
      });
    },
    async DeleteUser(data) {
      if (data == null) return;

      await usersService.deleteUser(data.row.data.id).then((response) => {
        if (response.status != 200) alert('Something went wrong!');
        this.RefreshView();
      });
    },
    async AddUser(row) {
      if (row == null) return;
      await usersService.addUser(row.data).then((response) => {
        if (response.status != 200) alert('Something went wrong!');
        this.RefreshView();
      });
    },
    async RefreshView() {
      try {
        this.loadingVisible = true;
        await this.GetFullData();
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingVisible = false;
      }
    },
  },
};
</script>
