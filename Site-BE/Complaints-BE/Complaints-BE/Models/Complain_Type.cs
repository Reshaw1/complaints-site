using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Complain_Type : Entity<Complain_Type>
    {
        string type { get; set; }

        public string IDCol = "COMPLAIN_TYPE_ID";

        public string colsID = @"
        COMPLAIN_TYPE_ID,
	    COMPLAIN_TYPE";

        public string cols = @"
	    COMPLAIN_TYPE";

        public string values()
        {
            return $@"'{type}'";
        }
        public string changes()
        {
            return $@"COMPLAIN_TYPE = '{type}'";
        }
    }
}
