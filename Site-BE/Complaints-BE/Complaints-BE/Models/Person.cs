using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Person : Entity<Person>
    {

        [StringLength(60)]
        public string name { get; set; }
        public DateTime birthDay { get; set; }

        [StringLength(11)]
        public string idCard { get; set; }

        [StringLength(70)]
        public string email { get; set; }

        [StringLength(12)]
        public string phone { get; set; }

        [StringLength(1)]
        public string gender { get; set; }

        public string IDCol = "PERSON_ID";

        public string colsID = @"
        PERSON_ID,
        PERSON_NAME,
        PERSON_BIRTH_DATE,
        PERSON_CARD_ID,
        PERSON_EMAIL,
        PERSON_PHONE,
        PERSON_GENDER";

        public string cols = @"
        PERSON_NAME,
        PERSON_BIRTH_DATE,
        PERSON_CARD_ID,
        PERSON_EMAIL,
        PERSON_PHONE,
        PERSON_GENDER";

        public string values()
        {
            return $@"'{name}',
            '{birthDay}',
            '{idCard}',
            '{email}',
            '{phone}',
            '{gender}'";
        }
        public string changes() {
            return $@"PERSON_NAME = '{name}',
            PERSON_BIRTH_DATE = '{birthDay}',
            PERSON_CARD_ID = '{idCard}',
            PERSON_EMAIL = '{email}',
            PERSON_PHONE = '{phone}',
            PERSON_GENDER = '{gender}'";
        } 
    }

    
}
