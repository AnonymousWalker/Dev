using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using MyLab.Models;
using System.Web.Script.Serialization;

namespace MyLab.Controllers
{
    public class HomeController : Controller
    {

        //private AdministratorEntities Db = DependencyResolver.Current.GetService<AdministratorEntities>();
        private AdministratorEntities Db;

        public HomeController(AdministratorEntities db)
        {
            Db = db;
        }

        public ActionResult Index()
        {
            return View();

        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Test()
        {
            var employees = Db.Employees.ToList();
            return View("Test", employees);
        }

        [HttpGet]
        public ActionResult LoadTable()
        {
            var employees = Db.Employees.Select(
            //var json = new JavaScriptSerializer().Serialize(employee);
            x => new ViewModel.EmployeeViewModel
            {
                EmployeeID = x.EmployeeID,
                FirstName = x.FirstName,
                LastName = x.LastName,
                AdminFileID = x.AdminFileID,
                Company = x.Company.CompanyCodeName
            });
            return Json(employees, JsonRequestBehavior.AllowGet);
        }

        private const int pageSize = 5;
        [HttpGet]
        public ActionResult PagedList(int pagenum = 1)
        {
            var employees = Db.Employees
                            .OrderBy(x => x.EmployeeID)
                            .Skip((pagenum - 1) * pageSize)
                            .Take(pageSize)
                            .Select(x=> new ViewModel.EmployeeViewModel
                            {
                                EmployeeID = x.EmployeeID,
                                AdminFileID = x.AdminFileID,
                                Company = x.Company.CompanyCodeName,
                                FirstName = x.FirstName,
                                LastName = x.LastName
                            }).ToList();
            ViewBag.CurrentPage = pagenum;
            return View("PagedListEmployees",employees);
        }
    }
}

