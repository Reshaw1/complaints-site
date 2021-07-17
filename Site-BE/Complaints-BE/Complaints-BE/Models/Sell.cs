using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Sell : Entity<Sell>
    {
        public DateTime date { get; set; }
        public Product product { get; set; }
        public Product_State product_state { get; set; }
        public Person person { get; set; }

        public string IDCol = "SELL_ID";

        public string colsID = @"
        SELL_ID,
	    SELL_DATE,
	    PRODUCT_STATE_ID,
	    PRODUCT_ID,
	    PERSON_ID";

        public string cols = @"
	    SELL_DATE,
	    PRODUCT_STATE_ID,
	    PRODUCT_ID,
	    PERSON_ID";

        public string values()
        {
            return $@"'{date}',
            '{product_state.ID}',
            '{product.ID}',
            '{person.ID}'";
        }
        public string changes()
        {
            return $@"SELL_ID = '{date}',
            PRODUCT_STATE_ID = '{product_state.ID}',
            PRODUCT_ID = '{product.ID}',
            PERSON_ID = '{person.ID}'";
        }
    }
}
