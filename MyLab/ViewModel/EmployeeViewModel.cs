﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyLab.ViewModel
{
    public class EmployeeViewModel
    {
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Nullable<int> AdminFileID { get; set; }
        public Nullable<int> EmployedById { get; set; }
        public string Company { get; set; }
    }
}