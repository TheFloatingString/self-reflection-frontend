import React, { useState } from 'react';
import '../App.css';
import NavigationBar from '../components/NavigationBar';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Divider from "@mui/material/Divider";

function FaqPage() {
  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showQuestion3, setShowQuestion3] = useState(false);

  const toggleQuestion1 = () => {
    setShowQuestion1(!showQuestion1);
  };

  const toggleQuestion2 = () => {
    setShowQuestion2(!showQuestion2);
  };

  const toggleQuestion3 = () => {
    setShowQuestion3(!showQuestion3);
  };

  return (
    <div className='AppFaq'>
        <NavigationBar />
            <h1>Questions for Pondering</h1>


<p>「欲知前世因，今生受者是；<br/>欲知未來果，今生作者是。」 <br /><br />
"To know the causes of your past lives, look at your current circumstances. <br/>To know the consequences of your future lives, look at your current actions." </p>

<p>It highlights the concept of karma, where one's current experiences are the result of past actions and one's future experiences are determined by one's present actions.</p>


<h3>Aren’t we all simply direct results of nature and nurture, meaning genetics, lifestyle, personal care and environment, etc.?</h3>

<h3>How does each life stage reflect our karma from past lives?</h3>
<p>
  From birth and living through early childhood, middle childhood and teenage stage (up to 17 years old), we are heavily dependent on our parents for emotional, educational and financial support. This is a direct reflection of the karma we created in past lives. </p>

  <p>After the age of 17 we start to make decisions that will either benefit or harm other beings and our environment. </p>

<ul>
<li>After childhood, we are free to go off on our own/make our own choices</li>
<li>Better circumstances make it easier to make good choices</li>
<li>We don’t have control over the situation we start off in, but we can control our decisions in this life</li>
<li><b>Determinante</b> (we achieve “the right views” and are able to make progress) vs <b>indeterminate</b> (constantly switching from good to bad and bad to good) personality</li>
</ul>



<h3>Physical Quotient</h3>

<p>- Isn’t it purely genetics that we get from our biological parents? What does it have to do with karma?</p>
<ul>
  <li>The amount of genetic variation even between two people who have the same parents is HUGE</li>
  <li>Does not just include appearances, also includes things like health, intellect, emotional intellect, etc.</li>
  <li>Common misunderstanding - if one feels one is beautiful, it’s because they deserve it. If they feel they are ugly, they blame their parents. (it's not me, it’s them)</li>
  <li>Relationship is correlated, but that does not mean direct causation</li>
</ul>

<p>On appearance: If physical beauty is the consequence of having practiced patience in past lives, how come some beautiful people are obnoxious and impatient?</p>

<p>On health and longevity: If health and longevity is the consequence of having protected beings (humans and non-humans) in past lives, how come some healthy people are cruel and harmful to beings.</p>


<h3>Intellectual Quotient</h3>

<p>Isn’t IQ a direct product of our environment?</p>


<h3>Emotional Quotient</h3>

<p>Is personality hard-wired or can it be altered? <br />
Can emotional management ability be acquired during our lifetime, or is it innate?</p>


<h3>Spiritual Quotient</h3>

<p>Is spirituality an optional or essential aspect of life? <br />
Can one be happy and at peace in life without being spiritual?</p>

<Divider />

<h3>FAQ on Karma and Consequence</h3>

<p>If generosity from past lives leads to wealth in the present life, how come some rich people are notably stingy? </p>








    </div>
  );
}

export default FaqPage;


                // <h3 onClick={toggleQuestion1} style={{ cursor: 'pointer' }}>Question 1</h3>
                // {showQuestion1 && (
                // <div style={{ marginTop: '1rem' }}>
                //     <p>Answer 1</p>
                // </div>
                // )}
                // <h3 onClick={toggleQuestion2} style={{ cursor: 'pointer', marginTop: '1rem' }}>Question 2</h3>
                // {showQuestion2 && (
                // <div style={{ marginTop: '1rem' }}>
                //     <p>Answer 2</p>
                // </div>
                // )}
                // <h3 onClick={toggleQuestion3} style={{ cursor: 'pointer', marginTop: '1rem' }}>Question 3</h3>
                // {showQuestion3 && (
                // <div style={{ marginTop: '1rem' }}>
                //     <p>Answer 3</p>
                // </div>
                // )}