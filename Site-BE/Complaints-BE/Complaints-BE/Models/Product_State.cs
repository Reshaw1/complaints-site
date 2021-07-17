using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Product_State : Entity<Product_State>
    {
        public string state { get; set; }

        public string IDCol = "PRODUCT_STATE_ID";

        public string colsID = @"
        PRODUCT_STATE_ID,
	    PRODUCT_STATE";

        public string cols = @"
	    PRODUCT_STATE";

        public string values()
        {
            return $@"'{state}'";
        }
        public string changes()
        {
            return $@"PRODUCT_STATE = '{state}'";
        }
    }
}
