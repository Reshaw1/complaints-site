using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Complain_State : Entity<Complain_State>
    {
        public string state { get; set; }

        public string IDCol = "COMPLAIN_STATE_ID";

        public string colsID = @"
        COMPLAIN_STATE_ID,
	    COMPLAIN_STATE";

        public string cols = @"
	    COMPLAIN_STATE";

        public string values()
        {
            return $@"'{state}'";
        }
        public string changes()
        {
            return $@"COMPLAIN_STATE = '{state}'";
        }
    }
}
