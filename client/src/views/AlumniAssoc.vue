<template>
  <div class="container">
    <div class="rows">
      <v-row class="rows">
        <h1 class="headerTop">NARAP Alumni Association</h1>
      </v-row>
      <v-row class="rows">
          <v-col col="8" lg="8" md="8" sm="12">
              <p id="p">
                Regardless of where you find yourself in your health care career, the NARAP Alumni Association has something for you!
              <br><br>
                  For undergraduate or graduate students, you will meet professionals in your field of interest, others who have traveled your
                  path and a support network of your peers nationwide.
              <br><br>
                  For health care professionals who have completed their education, our goal is to develop an atmosphere of collaboration
                  and foster the exchange of ideas. Whether you're looking to expand your research, utilize NARAP's Affiliate network for feedback
                  and consultation or give back by mentoring future health care professionals, we're confident that this will be a place for you.
              </p>

          </v-col>
          <v-col col="4" lg="4" md="4" sm="12">
                <v-img class="assocImg" src="../assets/assoc.png"></v-img>
          </v-col>
      </v-row>
      <v-row class="rows">
        <v-row class="headerThree rows">
            <h5>Our Program</h5>
        </v-row>
          <v-col col="12" lg="8" md="8">
            <ul class="list">
                <li>Network with other students or health professionals across the US.</li>
                <li>Exchange ideas and share advice on applications, graduate school and more.</li>
                <li>Enhance your knowledge of vital professional resources (resume writing, use of LinkedIn, networking events...)</li>
                <li>Connect with researchers of similar interest or those in need of experienced research associates.</li>
                <li>Re-connect with friends and colleagues.</li>
            </ul>
          </v-col>
          <v-col class="buttonBox" col="12" lg="4" md="4">
              <v-row id="quickLinks">
                  <h1 class="quick">Quick Links</h1>
              </v-row>
                <v-row class="buttRows">
                    <v-col cols="12" lg="6" md="6">
                        <v-btn class="buttons" onclick="window.open('https://www.thenarap.org/information-form')" small color="success" dark>Update Information</v-btn>
                    </v-col>
                    <v-col cols="12" lg="6" md="6">
                        <v-btn class="buttons" small color="success" dark onclick="window.location.href = '../alumnimentor'">Mentoring Program</v-btn>
                    </v-col>
                </v-row>
                <v-row class="buttRows">
                    <v-col cols="12" lg="6" md="6">
                        <v-btn class="buttons" small color="success" dark onclick="window.open('https://www.thenarap.org/engagement-survey')">Our Feedback Survey</v-btn>
                    </v-col>
                    <v-col cols="12" lg="6" md="6">
                        <v-btn class="buttons" onclick="window.location.href = '../alumninow'" small color="success" dark>Where Are They Now?</v-btn>
                    </v-col>
                </v-row>
          </v-col>
      </v-row>
      <v-row class="rows">
        <v-row class="headerThree rows">
            <h5>Questions</h5>
        </v-row>
        <v-row class="rows">
            <p id="p">
                Feel free to contact our Alumni Association Coordinator, Henry Siccardi at <a href="mailto:alumni@theNARAP.org" style="text-decoration: underline;">ask@theNARAP.org</a>.
            </p>
        </v-row>
      </v-row>
    </div>
  </div>
</template>


<style scoped>
.buttRows{
    margin-left: -4px;
    margin-right: 8px;
}

#quickLinks{
  font-size: 1.2em;
  margin-left: 17%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}
.buttonBox{
    max-width: 115%;
    margin-top: -10px;
    border: 1px solid #000;
}
.buttons{
    max-width: 115%;
}

.rows{
    font-size: 15px;
    width: 95%;
    padding-left: 1%;
    margin: auto;
    font-family: 'Trebuchet MS', sans-serif;
}

.assocImg{
    max-width: 100%;
}

.headerTop{
  font-size: 40px;
  padding-left: 10px;
  margin-top: 2%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}

.headerThree{
  font-size: 20px;
  padding-left: .5rem;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}

.list{
  font-size: 15px;
  margin-left: 20px;
  margin-top: -10px;
  font-family: 'Trebuchet MS', sans-serif;
  color:rgba(9, 8, 7, 0.924);
}

.rowButton{
    margin-top: -70px;
    width: 75%;
    padding-left: 150px;
}

.btn{
    font-size: 10px;
    margin-bottom: 3%;
}

</style>
