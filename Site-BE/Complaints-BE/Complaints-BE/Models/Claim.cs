using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Claim : Entity<Claim>
    {
        public DateTime date { get; set; }

        [StringLength(200)]
        public string description { get; set; }
        public Person person { get; set; }
        public Department department { get; set; }
        public Claim_Type type { get; set; }
        public Claim_State state { get; set; }

        public string IDCol = "CLAIM_ID";

        public string colsID = @"
        CLAIM_ID,
	    CLAIM_DATE,
	    CLAIM_DESCRIPTION,
	    PERSON_ID,
	    DEPARTMENT_ID,
	    CLAIM_STATE_ID,
	    CLAIM_TYPE_ID";

        public string cols = @"
	    CLAIM_DATE,
	    CLAIM_DESCRIPTION,
	    PERSON_ID,
	    DEPARTMENT_ID,
	    CLAIM_STATE_ID,
	    CLAIM_TYPE_ID";

        public string values()
        {
            return $@"'{date}',
            '{description}',
            '{person.ID}',
            '{department.ID}',
            '{state.ID}',
            '{type.ID}'";
        }
        public string changes()
        {
            return $@"COMPLAIN_DATE = '{date}',
            COMPLAIN_DESCRIPTION = '{description}',
            PERSON_ID = '{person.ID}',
            DEPARTMENT_ID = '{department.ID}',
            COMPLAIN_STATE_ID = '{state.ID}',
            COMPLAIN_TYPE_ID = '{type.ID}'";
        }
    }
}
