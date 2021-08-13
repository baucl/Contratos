import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "../../index.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";

const AppLayout = () => {
  const { info } = useContext(ThemeContext).values;
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="0">
            <img src={`data:image/png;base64,${LogoUnilinkBase64}`} />
          </Menu.Item>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;

export const LogoUnilinkBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAHcAAAAbCAYAAABGDxCrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUJDMzJDNjU0MjZEMTFFOEJDQjVEQURFQzk3NDQxODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUJDMzJDNjY0MjZEMTFFOEJDQjVEQURFQzk3NDQxODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQkMzMkM2MzQyNkQxMUU4QkNCNURBREVDOTc0NDE4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQkMzMkM2NDQyNkQxMUU4QkNCNURBREVDOTc0NDE4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqbyoroAAAT/SURBVHja7Fp7qBVFGJ+9t65Xu5nXkowoFUUjSQKLQIqCisKyqJBCSQP/UBNRA4MKioLK7P0gJSJB6UWlJGoFpRSJldA/0dukh721x8007znnbr+v8zswfc7Ozu7pnNXYD34cdnZmd+Z7zW++s1Ecx6aU/6ccwd/5wHnAX0ANiKw+HUA3sA54To0/C1gCDABVx7hOYDWwqVR1ccZ9PKDvyQ7jXgBcHfCO0rgFSEeGvvscbZWAcZVSzcUaN8QAB3I6R61U86Efub607pOoVHOxxg2hzHFO5/AZdwRwSsK9I4HRJGXG02eU6nM0MCFlTkM4zpZjHW0jgeMDdSlje1TbqSkBILoZQ8LakEF8lk9vMq9zEvoM4XszRW6cM3J977gUeNSzgBXAUM/4E0gGbaWKs3wCzPGMm+R472wHsVwKLArUjzxvimp7G3jWM0YMuQoYr4jrY7znksnAG3R8l03GASuzRm4r0vJAyn4f4nw6siVydwLXA2MzjIsc74sybCudqu8gGuFM4IoM8/Ct+3TgZeBOYI1Hp/3/ReR2Nmncmse4MUlcnDIn3Wc4sBm4FXjEM65ftVUdpLGSge0fUORRHP9XYC5wE3Bcgm76aRC9Ji1nA+uBmcAzKTqptMu47ZYaU9NG4E/gloLmIfo6CXiNKXtlRue326cDT7Cm8GYr2PLhYlx7u1hIxUxoIt02I1XygjX8nR04j4hjRaYBNwDXAdtadRTKS6hqBUWvyI/Aw8BTBcwhos4G81qMsziAfTcMK6n1EqZiIZbv5T0KdbQwcosuYggb3UXF2utu1/m7sZ9+DjwPPOmI3FjpWZzyZmAecC3nflre9FXjmbEVRZBqk2fwgRTFuVKbdkRhzu8Ar/KY1NEmw8ZqLss4h1mm/oeKy8HEsJfxdyrwM4+Fm3hMirMq8MsMHmjUmSyEReaR/oC9sdOm/h7ZA9wFPGjNqajK2RIy+V5gr8PRhgHfARfSsCL3ARuALXmiI+Rfmz3qeiirJGmyL6cSdjOzjPb0GcOssz/AEVfRqHOYIltNBiNH5Ip8zCLFPQnbllSYvgB+U+3zuX/fkdW4KwL6vquuZzrKbS75ugmmudvBMG25Bvg2wzMXcMxFjI68RNI0OfYhOq1Uvz5TjlajEbsd48631hBs3B3c7JNE/sR/wbqWA/nywAWuT/FuX3pcRlIx3XFP2OflTFlGVYaSnE4c4QFT/19aFxW6Wd2y5agMEd6jeEvEtqT9fR65gOyrv6utpidBL5LGLzb1MumUUELV2AumOhZoWOnps67XBkbtOqaYJJEUNMJz/0Ma9nb+fsrFjyPJuNKRGaRw8b3nma+YeglvpGrvI4mx5SOm8WEOI/VyH3ya1z+o7UGi9idPhUtKpPcD9yrdVrjXJhHJ7aZe876bR6W96n4Xz9QmUt9QXQW86CA20vkXXstiZgR681guIkmkyD8+JbobUTWDZ0RJ19+Yg78KsSN3sGPP0jLcWpPhmC5HFE0EjnEoW+b0FbOeYZ/9FrmLyEv+SGH8vexTVZHbl7IljKITaE4jGelc4CUjxlW4Mf63TLPurY3DZZbj2SXaiKQby2mgpbyeCGzPYNi5pXKLR+T5tPUM4H2eyW4LTMMfkLJvNaUULlHKd8uT/8ndB3+hoOUtniNXp+wvpRxCxu3iBi20W75RPtE6GlTIVKWs93oTxYpSCjJuKYex/C3AALm9+aQG5KZMAAAAAElFTkSuQmCC";
