//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyLab.Models
{
    using System;

    public partial class Employee
    {
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Nullable<int> AdminFileID { get; set; }
        public Nullable<int> EmployedById { get; set; }
    
        public virtual AdminFile AdminFile { get; set; }
        public virtual Company Company { get; set; }
    }
}
