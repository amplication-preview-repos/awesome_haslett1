import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SubCategoryList } from "./subCategory/SubCategoryList";
import { SubCategoryCreate } from "./subCategory/SubCategoryCreate";
import { SubCategoryEdit } from "./subCategory/SubCategoryEdit";
import { SubCategoryShow } from "./subCategory/SubCategoryShow";
import { InventoryItemList } from "./inventoryItem/InventoryItemList";
import { InventoryItemCreate } from "./inventoryItem/InventoryItemCreate";
import { InventoryItemEdit } from "./inventoryItem/InventoryItemEdit";
import { InventoryItemShow } from "./inventoryItem/InventoryItemShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { FileUploadList } from "./fileUpload/FileUploadList";
import { FileUploadCreate } from "./fileUpload/FileUploadCreate";
import { FileUploadEdit } from "./fileUpload/FileUploadEdit";
import { FileUploadShow } from "./fileUpload/FileUploadShow";
import { ProgressTrackerList } from "./progressTracker/ProgressTrackerList";
import { ProgressTrackerCreate } from "./progressTracker/ProgressTrackerCreate";
import { ProgressTrackerEdit } from "./progressTracker/ProgressTrackerEdit";
import { ProgressTrackerShow } from "./progressTracker/ProgressTrackerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InventoryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SubCategory"
          list={SubCategoryList}
          edit={SubCategoryEdit}
          create={SubCategoryCreate}
          show={SubCategoryShow}
        />
        <Resource
          name="InventoryItem"
          list={InventoryItemList}
          edit={InventoryItemEdit}
          create={InventoryItemCreate}
          show={InventoryItemShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="FileUpload"
          list={FileUploadList}
          edit={FileUploadEdit}
          create={FileUploadCreate}
          show={FileUploadShow}
        />
        <Resource
          name="ProgressTracker"
          list={ProgressTrackerList}
          edit={ProgressTrackerEdit}
          create={ProgressTrackerCreate}
          show={ProgressTrackerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
