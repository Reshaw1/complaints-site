using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Department : Entity<Department>
    {
        public string name { get; set; }

        public string IDCol = "DEPARTMENT_ID";

        public string colsID = @"
        DEPARTMENT_ID,
	    DEPARTMENT_NAME";

        public string cols = @"
	    DEPARTMENT_NAME";

        public string values()
        {
            return $@"'{name}'";
        }
        public string changes()
        {
            return $@"DEPARTMENT_NAME = '{name}'";
        }
    }
}
