using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Product : Entity<Product>
    {
        public int name { get; set; }
        public decimal price { get; set; }
        public Product_Type type { get; set; }

        public string IDCol = "CLAIM_ID";

        public string colsID = @"
        PRODUCT_ID,
	    PRODUCT_NAME,
	    PRODUCT_PRICE,
	    PRODUCT_TYPE_ID";

        public string cols = @"
	    PRODUCT_NAME,
	    PRODUCT_PRICE,
	    PRODUCT_TYPE_ID";

        public string values()
        {
            return $@"'{name}',
            '{price}',
            '{type.ID}'";
        }
        public string changes()
        {
            return $@"PRODUCT_NAME = '{name}',
            PRODUCT_PRICE = '{price}',
            PRODUCT_TYPE_ID = '{type.ID}'";
        }
    }
}
