import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Signin",
      name: "Signin",
      component: Signin,
      meta: {
        guest: true
      }
    },
    {
      path: "/Signup",
      name: "Signup",
      component: Signup,
      meta: {
        guest: true
      }
    },
    {
      path: "/PrivateSettings",
      name: "PrivateSettings",
      component: PrivateChanges,
      meta: {
        auth: true
      }
    },
    {
      path: "/make-group",
      name: "makeGroup",
      component: makeGroup,
      meta: {
        auth: true,
        permissions: ["categories:write"]
      }
    },
    {
      path: "/c/:categorySlug/edit",
      name: "modifyGroup",
      component: modifyGroup,
      meta: {
        auth: true,
        permissions: ["categories:write"]
      }
    },
    {
      path: "/c/:categorySlug",
      name: "Group",
      component: Group
    },
    {
      path: "/t/:topicId",
      name: "Subject",
      component: Subject
    },
    {
      path: "/c/:categorySlug/make-subject",
      name: "makeSubject",
      component: makeSubject,
      meta: { auth: true }
    },
    {
      path: "/t/:topicId/modify",
      name: "modifySubject",
      component: modifySubject,
      meta: { auth: true }
    },
    {
      path: "*",
      name: "LookupFail",
      component: LookupFail
    }
  ]
});
