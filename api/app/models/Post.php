<?php
class Post{
    private $db;

    public function __construct()
    {
        $this->db = new Database;
    }


    public function addPost($data){
        $this->db->query( 'INSERT INTO announcements (tid, abody) VALUES (:tid, :abody)');
        $this->db->bind(':tid', $data['tid']);
        $this->db->bind(':abody', $data['abody']);

        //Execute
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }

    public function getPosts($tid)
    {
        $this->db->query('SELECT * FROM announcements WHERE tid = :tid');
        // gives an array of objects
        $this->db->bind(':tid', $tid);
        $results = $this->db->resultSet(); // used to return more than 1 row
        return $results;
    }

  // used inner join to fetch teacher's name and class subject
    public function getAllPosts(){
         $this->db->query('SELECT * FROM announcements INNER JOIN teachers ON announcements.tid = teachers.tid
                              INNER JOIN class ON announcements.cid = class.cid ORDER BY adate DESC');
        // gives an array of objects
        $results = $this->db->resultSet(); // used to return more than 1 row
        return $results;
    }

    public function getAssignments($cid)
    {
        $this->db->query('SELECT * FROM assignments INNER JOIN class ON assignments.cid = class.cid WHERE assignments.cid = :cid ORDER BY class.cid');
        // gives an array of objects
        $this->db->bind(':cid', $cid);
        $results = $this->db->resultSet(); // used to return more than 1 row
        return $results;
    }

    public function allAssignments()
    {
        $this->db->query('SELECT * FROM assignments INNER JOIN class ON assignments.cid = class.cid ORDER BY class.cid');
        // gives an array of objects
        $results = $this->db->resultSet(); // used to return more than 1 row
        return $results;
    }
    public function addSubmission($data)
    {
        $this->db->query('INSERT INTO submissions (asgid, stid, submission) VALUES (:aid,  :sid, :submission)');
        $this->db->bind(':aid', $data['aid']);
        $this->db->bind(':tid', $data['cid']);
        //$this->db->bind(':sid', $data['sid']);
        $this->db->bind(':submission', $data['submission']);

        //Execute
        if ($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function getSubmissions($asgid)
    {
        $this->db->query('SELECT * FROM submissions WHERE asgid = :asgid');
        // gives an array of objects
        $this->db->bind(':asgid', $asgid);
        $results = $this->db->resultSet(); // used to return more than 1 row
        return $results;
    }

    public function gradeSubmissions($data){
        $this->db->query( 'UPDATE submissions SET grade=:grade WHERE (asgid=:aid and stid=:sid)');
        $this->db->bind(':aid', $data['aid']);
        //$this->db->bind(':tid', $data['tid']);
        $this->db->bind(':sid', $data['sid']);
        $this->db->bind(':grade', $data['grade']);

        //Execute
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }




}


