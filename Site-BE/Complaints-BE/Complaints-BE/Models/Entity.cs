using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Models
{
    public class Entity<T>
    {
        public int? ID { get; set; }
        static SqlConnection _connection;
        static SqlCommand _command;
        static SqlDataReader _reader;

        public static string entity = typeof(T).Name + "s";

        public static void Insert(string cols, string values) 
        {
            try
            {
                setConnection();
                if (_connection.State.Equals(ConnectionState.Closed))
                    _connection.Open();

                _command = new SqlCommand($@"INSERT INTO {entity} ({cols}) VALUES ({values})", _connection);

                _command.ExecuteNonQuery();
                _connection.Close();
            }
            catch (Exception ex)
            {
                throw new NotSupportedException(ex.Message);
            }
        }
        public static void Update(string changes, string colID, int id)
        {
            try
            {
                setConnection();
                if (_connection.State.Equals(ConnectionState.Closed))
                    _connection.Open();

                _command = new SqlCommand($@"UPDATE {entity} SET {changes} WHERE {colID} = {id}", _connection);

                _command.ExecuteNonQuery();
                _connection.Close();
            }
            catch (Exception ex)
            {
                throw new NotSupportedException(ex.Message);
            }
        }

        public static void Delete(int id, string colID)
        {
            try
            {
                setConnection();
                if (_connection.State.Equals(ConnectionState.Closed))
                    _connection.Open();

                _command = new SqlCommand($@"DELETE FROM {entity} WHERE {colID} = {id}", _connection);

                _command.ExecuteNonQuery();
                _connection.Close();
            }
            catch (Exception ex)
            {
                throw new NotSupportedException(ex.Message);
            }
        }

        public static List<List<string>> Select()
        {
            try
            {
                setConnection();
                List<List<string>> list2 = new List<List<string>>();
                if (_connection.State.Equals(ConnectionState.Closed))
                    _connection.Open();

                _command = new SqlCommand($@"SELECT * FROM {entity}", _connection);

                _reader = _command.ExecuteReader();

                while (_reader.Read())
                {
                    List<string> list = new List<string>();
                    for (int i = 0; i < _reader.FieldCount; i++)
                    {
                        list.Add(_reader[i].ToString());
                    }
                    list2.Add(list);
                }

                _connection.Close();
                return list2;
            }
            catch (Exception ex)
            {
                throw new NotSupportedException(ex.Message);
            }
        }

        public static int SelectMax(string idcol)
        {
            try
            {
                setConnection();
                int id = 0;
                if (_connection.State.Equals(ConnectionState.Closed))
                    _connection.Open();

                _command = new SqlCommand($@"SELECT MAX({idcol}) AS [{idcol}] FROM {entity}", _connection);

                _reader = _command.ExecuteReader();


                while (_reader.Read())
                   id = int.Parse(_reader[idcol].ToString());

                _connection.Close();
                return id;
            }
            catch (Exception ex)
            {
                throw new NotSupportedException(ex.Message);
            }
        }

        public static void setConnection()
        {
            //_connection = new SqlConnection("Data Source=DESKTOP-T76LFOU;Initial Catalog=Quejas&Reclamaciones;Integrated Security=True");
            _connection = new SqlConnection("Data Source=LAPTOP-2RLNODU0\\SQLEXPRESS;Initial Catalog=Complaints;Integrated Security=True");

        }
    }
}
