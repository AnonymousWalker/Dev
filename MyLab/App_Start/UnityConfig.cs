using System.Web.Mvc;
using Unity;
using MyLab.Models;
using Unity.AspNet.Mvc;

namespace MyLab
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            // e.g. container.RegisterType<ITestService, TestService>();

            container
               .RegisterType<AdministratorEntities>(new PerRequestLifetimeManager());  //create DI for using this type 
            //container.Resolve<AdministratorEntities>();
            //DependencyResolver.Current.GetService<AdministratorEntities>();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container)); 
        }
    }
}