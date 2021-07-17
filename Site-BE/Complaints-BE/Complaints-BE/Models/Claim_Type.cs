using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Claim_Type : Entity<Claim_Type>
    {
        string type { get; set; }

        public string IDCol = "CLAIM_TYPE_ID";

        public string colsID = @"
        CLAIM_TYPE_ID,
	    CLAIM_TYPE";

        public string cols = @"
	    CLAIM_TYPE";

        public string values()
        {
            return $@"'{type}'";
        }
        public string changes()
        {
            return $@"CLAIM_TYPE = '{type}'";
        }
    }
}
