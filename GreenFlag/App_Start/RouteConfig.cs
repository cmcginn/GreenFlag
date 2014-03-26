using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace GreenFlag
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                 name: "Contact",
                 url: "Contact",
                 defaults: new { controller = "Home", action = "Contact", id = UrlParameter.Optional }
             );
            routes.MapRoute(
                 name: "Services",
                 url: "Services",
                 defaults: new { controller = "Home", action = "Services", id = UrlParameter.Optional }
             );
            routes.MapRoute(
                 name: "Technologies",
                 url: "Technologies",
                 defaults: new { controller = "Home", action = "Technologies", id = UrlParameter.Optional }
             );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
   
        }
    }
}