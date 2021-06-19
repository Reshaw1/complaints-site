using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Complain : Entity<Complain>
    {
        public DateTime date { get; set; }

        [StringLength(200)]
        public string description { get; set; }
        public Person person { get; set; }
        public Department department { get; set; }
        public Complain_Type type { get; set; }
        public Complain_State state { get; set; }

        public string IDCol = "COMPLAIN_ID";

        public string colsID = @"
        COMPLAIN_ID,
	    COMPLAIN_DATE,
	    COMPLAIN_DESCRIPTION,
	    PERSON_ID,
	    DEPARTMENT_ID,
	    COMPLAIN_STATE_ID,
	    COMPLAIN_TYPE_ID";

        public string cols = @"
	    COMPLAIN_DATE,
	    COMPLAIN_DESCRIPTION,
	    PERSON_ID,
	    DEPARTMENT_ID,
	    COMPLAIN_STATE_ID,
	    COMPLAIN_TYPE_ID";

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
