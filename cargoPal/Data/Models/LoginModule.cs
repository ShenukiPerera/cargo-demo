using System;
using System.Collections.Generic;

namespace cargoPal.Data.Models
{
    public partial class LoginModule
    {
        public int UserId { get; set; }
        public string UserEmail { get; set; }
        public string UserPassoword { get; set; }
        public string UserType { get; set; }
    }
}
