using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Claim_State : Entity<Claim_State>
    {
        string state { get; set; }

        public string IDCol = "CLAIM_STATE_ID";

        public string colsID = @"
        CLAIM_STATE_ID,
	    CLAIM_STATE";

        public string cols = @"
	    CLAIM_STATE";

        public string values()
        {
            return $@"'{state}'";
        }
        public string changes()
        {
            return $@"CLAIM_STATE = '{state}'";
        }
    }
}
