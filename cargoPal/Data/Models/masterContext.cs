using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace cargoPal.Data.Models
{
    public partial class masterContext : DbContext
    {
        public masterContext()
        {
        }

        public masterContext(DbContextOptions<masterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<LoginModule> LoginModule { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-CFATEUG\\SQLEXPRESS;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LoginModule>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__LoginMod__CB9A1CFFE83EF372");

                entity.HasIndex(e => e.UserEmail)
                    .HasName("UQ__LoginMod__D54ADF55949AEEE0")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.UserEmail)
                    .IsRequired()
                    .HasColumnName("userEmail")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserPassoword)
                    .IsRequired()
                    .HasColumnName("userPassoword")
                    .IsUnicode(false);

                entity.Property(e => e.UserType)
                    .IsRequired()
                    .HasColumnName("userType")
                    .HasMaxLength(1)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
