using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Product_Type : Entity<Product_Type>
    {
        public string type { get; set; }

        public string IDCol = "PRODUCT_TYPE_ID";

        public string colsID = @"
        PRODUCT_TYPE_ID,
	    PRODUCT_TYPE";

        public string cols = @"
	    PRODUCT_TYPE";

        public string values()
        {
            return $@"'{type}'";
        }
        public string changes()
        {
            return $@"PRODUCT_TYPE = '{type}'";
        }
    }
}
