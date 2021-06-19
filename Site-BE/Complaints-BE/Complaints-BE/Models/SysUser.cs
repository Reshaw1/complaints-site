using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Sys_User : Entity<Sys_User>
    {
        public string userName { get; set; }
        public string password { get; set; }
        public int userState { get; set; }
        public int userType { get; set; }
        public Person person { get; set; }

        public string IDCol = "SYS_USER_ID";

        public string colsID = @"
        [SYS_USER_ID],
        [SYS_USER_USERNAME],
        [SYS_USER_PASSWORD],
        [PERSON_ID],
        [SYS_USERS_STATE_ID],
        [SYS_USER_TYPE_ID]";

        public string cols = @"
        [SYS_USER_USERNAME],
        [SYS_USER_PASSWORD],
        [PERSON_ID],
        [SYS_USERS_STATE_ID],
        [SYS_USER_TYPE_ID]";

        public string values()
        {
            return $@"
            '{userName}',
            '{password}',
            '{person.ID}',
            '{userState}',
            '{userType}'";
        }
            
        public string changes()
        {
            return $@"
            [SYS_USER_USERNAME] = '{userName}',
            [SYS_USER_PASSWORD] = '{password}',
            [PERSON_ID] =  '{person.ID}',
            [SYS_USERS_STATE_ID] = '{userState}',
            [SYS_USER_TYPE_ID] = '{userType}'";
        }
    }
}
