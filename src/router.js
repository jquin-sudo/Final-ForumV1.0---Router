import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Site.vue";
import Group from "./views/Group.vue";
import Subject from "./views/Subject.vue";
import makeSubject from "./views/makeSubject.vue";
import modifySubject from "./views/modifySubject.vue";
import makeGroup from "./views/makeGroup.vue";
import modifyGroup from "./views/modifyGroup.vue";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";
import PrivateChanges from "./views/PrivateChanges.vue";
import LookupFail from "./views/LookupFail.vue";

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
