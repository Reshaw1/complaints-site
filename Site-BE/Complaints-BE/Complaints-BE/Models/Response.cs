using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Response : Entity<Response>
    {
        public DateTime date { get; set; }

        [StringLength(500)]
        public string content { get; set; }
        public Person person { get; set; }
        public Claim claim { get; set; }

        public string IDCol = "RESPONSE_ID";

        public string colsID = @"
        RESPONSE_ID,
	    RESPONSE_CONTENT,
	    RESPONSE_DATE,
	    CLAIM_ID,
	    PERSON_ID";

        public string cols = @"
	    RESPONSE_CONTENT,
	    RESPONSE_DATE,
	    CLAIM_ID,
	    PERSON_ID";

        public string values()
        {
            return $@"'{content}',
            '{date}',
            '{claim.ID}',
            '{person.ID}'";
        }
        public string changes()
        {
            return $@"RESPONSE_CONTENT = '{content}',
            RESPONSE_DATE = '{date}',
            CLAIM_ID = '{claim.ID}',
            PERSON_ID = '{person.ID}'";
        }
    }
}
