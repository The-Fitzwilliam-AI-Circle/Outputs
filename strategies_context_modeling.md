# Abandon normal instruments

- What if you couldn't use a smartphone? What would you infer from the environment alone?
- The questionnaire is a lossy compression of a life. What does it discard?
- Before sensors, people modeled each other's context through conversation. That was a richer protocol
- Your instrument assumes the context is digital. Most of life is not

# Accept advice

- Ask the person what they think their context is. They might be wrong, but they're not uninformed
- The ethnographer has been modeling personal context for a century without a single API call
- What does the therapist know about detecting context shifts that no sensor captures?
- The person who ignores your app's notifications has given you the most important feedback about your model

# Accretion

- Don't build the whole model. Infer one thing well. Then one more
- Context accumulates over a life. Your model should grow the same way — slowly, with memory
- Log everything. Interpret later. The pattern needs months to emerge
- Each interaction is a grain of context. Don't try to understand the beach from a single grain

# A line has two sides

- Every inference is also a surveillance capability
- The model that knows you well enough to help also knows you well enough to manipulate
- Rich context enables personalization and destroys privacy in the same gesture
- The data the user shares is also the data they lose control of

# Allow an easement

- Not everything needs to be inferred. Some context can just be asked for
- Which precision do you actually need? "At home" might be enough — you don't need the room
- Let the model be wrong sometimes. The cost of occasional error is lower than the cost of total surveillance
- What constraint are you imposing for technical convenience that the user would happily relax?

# Are there sections? Consider transitions

- The transition from "at work" to "commuting" to "at home" — the boundaries are where context switches and where the model fails
- Your model has states. Life has transitions. The interesting context is in the crossing
- Where does "morning routine" end and "day" begin? The person knows. Your sensor doesn't
- The context shift after a phone call. After a meal. After bad news. The transitions carry the signal

# Ask people to work against their better judgment

- Ask the user to annotate what your model got wrong. Their corrections are the training set you need
- Design the system assuming the user will lie about their context. What still works?
- Build the model that the privacy advocate would hate. Then build the version that satisfies them. The gap is the research
- Ask someone who distrusts technology to describe what contextual awareness they'd actually want

# Ask your body

- You know you're stressed before any sensor does. The body is the original context model
- Hunger, fatigue, pain — these are context states no accelerometer captures well
- Your own experience of being "in the zone" vs "distracted." Can you operationalize the difference?
- You feel the social context of a room the moment you enter it. What are you computing?

# Assemble some of the instruments in a group and treat the group

- Location + time + calendar + ambient sound. Individually trivial. Together, they're a context
- The phone, the watch, the smart speaker, and the laptop are one distributed sensor system. Treat them as one
- Combine the physiological signal with the behavioral signal with the self-report. One context, three modalities
- The person's context is not in any single data stream. It's in the joint distribution

# Balance the consistency principle with the inconsistency principle

- The model needs consistent priors to be useful and inconsistent updates to be adaptive
- Routine is context. Deviation from routine is context. You need to model both
- Some features should be stable (personality, preferences). Others should be volatile (mood, activity). Don't mix the timescales
- A context model that never changes is useless. One that changes constantly is untrustworthy. Find the balance

# Be dirty

- The noisy sensor signal still carries context. Don't filter it into oblivion
- Real-world data is messy: overlapping activities, contradictory signals, missing values. Build for that
- The user's self-report is inconsistent and biased. It's still the best ground truth you have
- Stop waiting for clean labeled data. Infer from the mess. The mess is the context

# Breathe more deeply

- Your model captures the last five minutes. What about the last five years?
- Zoom out: the person's life context — their job, their relationships, their health — shapes every micro-context
- What does this person's context look like across a whole day, not just the moment you're sampling?
- You're modeling the individual. What about the household, the neighborhood, the culture they're embedded in?

# Bridges -build -burn

- Connect the activity recognition community to the affective computing community. They're modeling the same person from different angles
- Build a bridge between the personal model and the population model. Transfer learning across lives
- Burn the bridge between "digital context" and "physical context." The user doesn't experience them separately
- Connect the researcher who measures behavior to the philosopher who questions what behavior means

# Cascades

- A bad night's sleep cascades into irritability cascades into a missed meeting cascades into stress. Your model sees the meeting. Can it trace the chain?
- One notification at the wrong moment cascades into twenty minutes of lost focus. The intervention caused the context shift
- Context propagates socially. One person's stress changes the room. Can you model the cascade across people?
- A single mislabeled context propagates through the model's updates. Error cascades are failure modes

# Change instrument roles

- The phone isn't a communication device. It's a context sensor: location, motion, usage patterns, ambient light
- The calendar isn't a planning tool. It's a declaration of intended future context. Use it as a prior
- The search history isn't a log. It's a signal of current preoccupation. That's context
- The user's silence — the gaps between interactions — is itself a measurement. Absence is a signal

# Change nothing and continue with immaculate consistency

- Keep the same sensor placement, same sampling rate, same features. The longitudinal comparison requires it
- Don't update the model architecture between participants. The consistency is what makes the comparison scientific
- Collect the same context features for a year. The boring consistency is what makes the rare event detectable
- Don't retrain on every new data point. Stability of inference is itself a feature the user trusts

# Children's voices -speaking -singing

- A child would say: "Mom is busy" or "Dad is sad." That's context modeling — coarse, embodied, and correct
- How would you explain what your model "knows" about the user to a ten-year-old? If you can't, the model is opaque
- The child doesn't separate "context" from experience. They live inside it. Your model looks at it from outside. Which is more accurate?
- "What are you doing?" is the simplest context query. It's also the hardest to answer precisely

# Cluster analysis

- Your users cluster into context archetypes you didn't design: the commuter, the shift worker, the caregiver, the freelancer
- Cluster the days, not the users. Which days look the same across different people? The shared structure is generalizable context
- The sensor data clusters into states that don't match your activity labels. The data's clusters are more honest than your taxonomy
- Which contexts does the user themselves group together? Their internal categories might not match yours

# Consider different fading systems

- How quickly does context become irrelevant? The meeting from an hour ago matters. The meeting from a month ago might not
- Memory should decay, but not uniformly. Some context (a bereavement, a new job) persists for months. Others (a phone call) fade in minutes
- The model's confidence should decay with time since last observation. How fast?
- The user's preferences drift over years. Your model's prior should drift with them — slowly enough to be stable, fast enough to be current

# Consult other sources -promising -unpromising

- Read the ecological psychology literature. Gibson's affordances are a theory of context
- The unpromising source: the novelist. They model personal context with more fidelity than any sensor system
- What does the social worker know about reading a person's situation from environmental cues?
- The surveillance studies literature has thought deeply about what it means to be observed. Consult it before you build the observer

# Convert a melodic element into a rhythmic element

- Stop modeling the content of activity. Model the rhythm: when do things start, stop, repeat, break?
- The circadian pattern is context. The disruption of the circadian pattern is context. Both are rhythms
- Convert the location trace into a temporal signature. The pattern of movement over a week is more informative than any single location
- The melody of a conversation — its emotional arc — matters less for context than its rhythm: when you talk, when you listen, when you pause

# Courage!

- Report that your context model doesn't work in the real world, even though the lab results were good
- Tell the user what the model inferred about them. Let them see it and object
- Publish the failure modes honestly. The community needs to know where context inference breaks
- Challenge the assumption that more data always means better context. Sometimes it means more noise and more intrusion

# Cut a vital connection

- Remove location from the model. What can you still infer? Probably more than you think
- Cut the connection between the context model and any intervention. Just observe. Don't act. What do you learn about context when it's not instrumentalized?
- Remove the temporal signal. Can you model context from a single snapshot?
- Sever the link between the personal model and the population prior. What does a purely individual model look like?

# Decorate, decorate

- Add ambient sound to every GPS reading. The location gains texture
- Record the weather alongside every sensor sample. The environment is context for the context
- Log what's on the screen when you measure the physiological signal. The digital and physical aren't separate
- Add a free-text field to every ecological momentary assessment. The decoration is where the real context hides

# Define an area as 'safe' and use it as an anchor

- "At home, evening, alone" — define that fully. Every other context is a deviation from this anchor
- Establish the user's baseline: their normal week, their typical rhythm. Detect context as departure from normal
- One well-understood context state that the model always gets right. Build trust outward from there
- The calibration session: five minutes of labeled ground truth. Everything else is relative to that anchor

# Destroy -nothing -the most important thing

- Delete the location history. What context can you reconstruct from behavioral patterns alone?
- Destroy nothing: keep the raw sensor data even when the model has processed it. The reinterpretation might come later
- Remove the most informative feature. What does the model learn to use instead? The substitute reveals what context really is
- What survives a factory reset? The context that persists without the device is the context that matters most

# Discard an axiom

- What if context isn't a state to be classified but a process to be tracked?
- What if the user doesn't have one context at a time? What if they're always in multiple overlapping contexts?
- Drop the assumption that context is objective. Two people in the same room are in different contexts
- What if you can't model context without modeling intention? The "what" without the "why" might be meaningless

# Disconnect from desire

- You want the model to be accurate. But the user might want it to be wrong — to preserve plausible deniability
- You want to personalize. The user might want to be treated generically. Personalization is not always welcome
- Stop wanting the context to be legible. Some of the most important human contexts resist measurement on principle
- You want the data. The data wants to be private. Disconnect your desire from the system design

# Discover the recipes you are using and abandon them

- You always start with location and time. What if you started with social context or cognitive load?
- You always use sliding windows. What if the relevant timescale is event-driven, not clock-driven?
- Your features are always numerical. What if the most informative feature is narrative — what the person says about their day?
- You always label context as a category. What if it's a continuous space with no natural boundaries?

# Distorting time

- Compress a week into a single context profile. What's the person's "weekly shape"?
- Sample at random intervals instead of fixed ones. The irregular sampling reveals different structure
- What if you modeled context backwards — from the evening's reflection to the morning's intention?
- Slow the model down: update once a day instead of every minute. What context is visible at that timescale that's invisible at the faster one?

# Do nothing for as long as possible

- Don't infer. Don't classify. Just collect. Let the data accumulate without interpretation for a month
- Resist the urge to intervene based on context. Observe the person's natural behavior without the system acting on it
- Don't personalize yet. Let the user interact with a generic system. Their friction with it reveals their context
- The model should be silent until it's confident. Premature inference erodes trust faster than silence does

# Don't be afraid of things because they're easy to do

- Time of day is easy. It's also the strongest predictor of most context states
- Day of week is trivial. It captures work vs. rest better than any physiological signal
- Asking the user is easy. "Are you busy right now?" is a one-bit context query with high accuracy
- Phone on/off the charger at night. Easy, binary, and tells you about sleep regularity

# Don't be frightened of cliches

- Location, location, location. It's a cliche because it works. Home, work, and commute explain most of the day
- "Context-aware computing" has been a buzzword for thirty years. The basic insight — that the same information is useful or useless depending on when you deliver it — is still true
- The daily routine is a cliche and a model. Most people are more predictable than they think
- Ecological momentary assessment is the standard. It's standard because nothing replaces the person's own report at the moment it happens

# Don't be frightened to display your talents

- Your intuition about when someone is interruptible is better than any model. What are you computing?
- You read social context from a glance. That perceptual talent is the specification for the system
- Your ability to know what someone needs without them saying it — that's context modeling. Formalize it
- The designer's sense for what feels intrusive vs. helpful is expertise. Encode it as a design constraint

# Don't break the silence

- The user hasn't opened the app in three days. That silence is context. Don't interrupt it
- Some contexts are defined by the absence of signal. No notifications, no movement, no sound. That's rest, or grief, or flow
- The model shouldn't speak when the user hasn't asked. Unsolicited inference is interruption
- The most important context might be the one the user doesn't want modeled. Respect the silence

# Don't stress one thing more than another

- You weight location heavily because it's easy to measure. But the social context — who is nearby — might matter more
- Physiological arousal gets attention because it's measurable. Cognitive state is harder to measure and more relevant
- You stress the current context. The anticipated context — what the person expects to happen next — might drive behavior more
- The mundane contexts (commuting, waiting, doing chores) occupy most of the day. Don't model only the dramatic moments

# Do something boring

- Label a thousand data points by hand. The boring annotation is what makes the model work
- Compute the confusion matrix for every context class. All of them. Including the ones you're embarrassed about
- Read every participant's diary entries. All of them. The qualitative data is the boring gold
- Measure the reliability of your sensor across twenty devices. The hardware variance is boring and it's in all your data

# Do the washing up

- Clean the dataset. Remove the duplicates, fix the timestamps, align the sensor clocks
- Update the documentation for the data collection protocol. It's drifted from what you actually do
- Reconcile the self-report labels with the sensor data. They disagree. Resolve it
- Back up the raw data. The participant can't be re-run

# Do the words need changing?

- "Context" means everything and therefore nothing. What specifically are you modeling?
- "Activity recognition" — the person is "sitting." But are they meditating, waiting, or despairing? The activity label loses the context
- Is it "personal data" or "behavioral telemetry"? The word changes who's comfortable with it
- "Passive sensing" sounds innocuous. "Continuous surveillance" describes the same system. Which word is honest?

# Do we need holes?

- Does the model need to know everything? The gaps in the model might be features, not bugs
- Some hours should be unmonitored. The gap protects the user and might improve trust
- The missing data — phone left at home, sensor off, no GPS — is itself a context signal. Don't impute it. Interpret it
- The hole in the model where it says "I don't know" is more honest than a low-confidence guess

# Emphasize differences

- Two users in the same location with the same activity label but completely different contexts. What distinguishes them?
- The same person on a workday vs. a holiday. Same home, same phone, different context. What's different in the data?
- Your model infers "relaxing." The user says "anxious." The difference is your research problem
- The gap between what you can measure and what you want to know — emphasize that gap. It's the core tension

# Emphasize repetitions

- The user checks their phone every morning at 7:03. The repetition is the routine. The deviation is the event
- The same commute, the same lunch spot, the same evening walk. Repetition is context compressed into habit
- The pattern that repeats across many users is generalizable structure. The pattern that repeats in one user is personal structure. Both are context
- The model makes the same error every Sunday. The repetition of error is a structural flaw. Fix the structure

# Emphasize the flaws

- The model is worst at detecting social context. That's not a footnote — it's the most important limitation
- Your context inference breaks when two activities overlap. The flaw reveals that your representation can't handle multiplicity
- The privacy violation that almost happened. Examine it. The near-miss is the design lesson
- The participant who withdrew from the study. Their reason for withdrawing is the most important data point about what the system felt like

# Faced with a choice, do both

- Passive sensing or self-report? Collect both. The agreement is the ground truth. The disagreement is the research
- Personal model or population model? Run both. The personal model captures the individual. The population model reveals what's shared
- Privacy or utility? Design for both. The system that does both is the one worth building
- Infer context or ask for it? Do both. The inference handles the default. The question handles the edge case

# Feedback recordings into an acoustic situation

- Show the user their own context trace. "This is what the model thinks your Tuesday looked like." Their correction is the signal
- Feed the model's predictions back as suggestions. The user's acceptance or rejection closes the loop
- Let the user's past context inform the current inference. Yesterday's stress changes the prior on today's mood
- The model's output becomes the user's input: a notification that changes the context it was responding to. The feedback loop is the system

# Fill every beat with something

- If the phone is in the pocket, every second is a potential data point. Accelerometer, gyroscope, barometer, ambient light
- Every app switch is a context signal. Every pause between switches is a signal. Every scroll speed is a signal
- Don't just sample when the user interacts. The background — between interactions — is where most context lives
- Every moment the model is uncertain is a moment worth labeling. Fill the gaps with questions, not assumptions

# Get your neck massaged

- You've been staring at sensor traces for hours. Go observe actual humans in actual contexts
- Switch from feature engineering to user interviews. Remember who the model is for
- Walk around the building without your phone. Notice what you notice. That's the context the phone can't see
- Talk to someone who has never heard of context modeling. Their confusion reveals your assumptions

# Ghost echoes

- The user moved house six months ago. The model still expects them to be at the old address. The ghost of the old context persists in the prior
- The breakup happened a year ago. The social context has changed completely, but the model's relational features still carry traces
- The job they left still shows up in the model's representation of "work." The ghost is in the training data
- Old habits leave traces in new routines. The person still pauses where the coffee shop used to be. The model sees the pause but not the ghost

# Give the game away

- Publish the model. Let the user see exactly what is inferred and from what data. Transparency is the trust architecture
- Open-source the context engine. If privacy depends on obscurity, the privacy is already broken
- Tell the user everything the system knows about them. The reaction is the most important design input
- Share the sensor data with the participant. It's their data. Their relationship with it is part of the context

# Give way to your worst impulse

- Collect everything. Every sensor, every log, every signal. Create the total surveillance dataset — then study what minimum subset you actually need
- Infer the thing you know you shouldn't: the user's emotional state, their relationship status, their political context. See if it's even possible. The limits of inference are the privacy argument
- Build the model with no privacy constraints. The dystopian prototype is the clearest articulation of the design space
- Deploy the model to yourself for a month. Live inside it. The discomfort is the design specification

# Go slowly all the way round the outside

- Before you model the person, model the environment. The place, the time, the weather, the social density
- Map the full sensor landscape before you pick features. What can you possibly know? What can you definitely not?
- Survey the entire field: ubiquitous computing, affective computing, HCI, behavioral science, surveillance studies. The perimeter is wider than any single discipline
- Understand the user's full life context before you model a single moment. The moment only makes sense inside the life

# Honor thy error as a hidden intention

- The model thinks you're at work. You're at a funeral. The error reveals that location and activity don't capture context
- The classifier says "exercising." The person is pacing anxiously. The error is a finding about the ambiguity of movement
- The model predicted you'd be asleep. You're awake at 3 AM. The error is the most interesting context event of the week
- The wrong inference, when shown to the user, provoked a strong correction. The strength of the correction is a label

# How would you have done it?

- How did people manage context before smartphones? Diaries, routines, social norms, memory. What did those systems know that yours doesn't?
- How would a butler model context? Decades of observation, total discretion, implicit inference. That's the design brief
- If you had to model context with only a notebook and a pencil, what would you record?
- How did Goffman model the presentation of self in 1959? His framework is richer than most computational context models

# Humanize something free of error

- The model predicts perfectly. The user finds it creepy. The accuracy is the problem
- Your context inference is technically correct but emotionally wrong. "You are alone" is true and unhelpful
- The system knows the user is stressed. The intervention it offers is perfectly optimized and completely tone-deaf. What's missing?
- The model has no concept of what the user wants the context to be, only what it is. Aspiration is context too

# Imagine the music as a moving chain or caterpillar

- Context flows through the day like a current. Morning intention to evening reflection. Follow the whole arc
- The person moves through contexts: home → commute → work → lunch → work → commute → home. The chain is the day. The variations are the life
- Each context state creates the conditions for the next. The handoff between states is where the model should pay attention
- The body moves through space. The mind moves through concerns. Both are trajectories. Context is where they intersect

# Imagine the music as a set of disconnected events

- What if each context moment is independent? The phone call, the errand, the thought. Not a narrative — a collection
- Stop assuming temporal continuity. The user's context can change completely between two sensor readings
- Treat each interaction as a standalone observation. The context at the moment of the query is all you need
- The user's life is not a story your model narrates. It's a sequence of moments. Some are connected. Some aren't. Don't force the connection

# Infinitesimal gradations

- The transition from focused to distracted isn't a switch. It's a gradient. Where on that gradient does intervention help?
- "Busy" and "available" are poles. The actual state is somewhere between. Can you measure the position?
- The difference between "commuting" and "traveling for leisure" might be one variable: the destination. The gradation is fine
- How small a context change can the system detect? A heart rate increase of two BPM. A five-minute delay in the routine. The minimum detectable shift defines the resolution

# Intentions -credibility of -nobility of -humility of

- Are you modeling context to help the user or to increase engagement? The intention shapes every design decision
- Your stated goal is wellbeing. Your metric is screen time. The intention and the measurement don't match
- Humility: the person's own understanding of their context is richer than any model you'll build. Design to augment, not replace
- The noble intention to help doesn't excuse the invasive implementation. The road to surveillance is paved with good intentions

# Into the impossible

- Model the user's inner context: their current thought, their current emotion, their current intention. Impossible with sensors. Essential for context
- Attempt to build a context model with zero personal data. Use only environmental and social signals. How far can you get?
- Try to model context for someone you've never met, in a culture you don't know. The failure defines what's universal vs. personal
- Build a context model that the user controls completely — every inference, every data point, every use. If that's impossible, why?

# Is it finished?

- The model has been collecting data for six months. It's as good as it's going to get for this user. Deploy it
- You've been adding features for a year. The last ten features improved accuracy by 0.2%. Stop
- The context model works for the lab study. Stop perfecting it and test it in the wild
- The PhD is about context modeling. At some point you have to stop modeling and start writing

# Is there something missing?

- You have location, activity, and time. You're missing the social context: who is the user with?
- The model has no representation of the user's goals. Context without purpose is just data
- You're missing the affective dimension. The user's emotional state colors every other context variable
- There's no representation of what just happened. The preceding event is the strongest predictor of the current state

# Is the tuning appropriate?

- Your sampling rate is one Hz. Is that too fast for location and too slow for gesture?
- The context window is five minutes. But the relevant context for this decision might be the last five hours
- Your model updates continuously. The user's context changes three times a day. You're overfitting to noise
- The notification threshold is set by the designer, not the user. The tuning should be personal

# Just carry on

- The model isn't great yet. It's been three months. Personal models need time. Continue collecting
- The participants are dropping out. The ones who stay are the ones whose data matters most. Continue
- The context categories don't feel right. Keep using them. The refinement comes from failure, not from redesign
- Nobody has cited your context modeling framework. It's ahead of its time. Continue

# Left channel, right channel, center channel

- Digital context (apps, browsing, messages), physical context (location, movement, posture), social context (who's nearby, who's communicating). Three channels, one person
- The user's reported context, the inferred context, and the actual context. Three versions. They rarely agree
- Past context, present context, anticipated context. Memory, sensing, and prediction. Three temporal channels
- The device's view, the environment's view, the user's view. Three perspectives on the same moment

# Listen in total darkness, or in a very large room, very quietly

- Turn off all the sensors. What does the user's behavior alone — their choices, their timing, their silences — tell you about context?
- Remove the labels. Look at the raw signal. What patterns exist before you impose categories?
- Infer context from a single data stream: only sound, or only movement, or only light level. What survives the reduction?
- What does the context model look like if you strip out everything that could identify the individual? What generalizable structure remains?

# Listen to the quiet voice

- The faintest signal in the data: a slight change in typing speed, a marginally later alarm. The early warning of a context shift
- The user's hesitation before answering the EMA prompt. The hesitation is data about the quality of the self-report
- The feature that contributes 1% to the model but is present in every misclassification. It's capturing something the other features miss
- The quiet discomfort the user expressed once about the system knowing their location. That single comment outweighs a thousand accuracy metrics

# Look at a very small object; look at its center

- One moment. One context inference. Trace every signal that contributed. Understand why the model said what it said
- One user's full day, fully annotated. What does complete context look like for a real person?
- The moment the model switches from "at work" to "commuting." What exactly triggered the transition? Look at every feature
- One misclassification. One wrong context. Follow it back to the data. The error in miniature reveals the error in general

# Look at the order in which you do things

- You collect, then process, then model, then evaluate. What if you evaluated first — defined what good context inference looks like before you collect?
- You design the sensor system, then the model, then the interface. What if you designed the interface first and let the user's needs determine what to sense?
- You build the model, then consider privacy. What if privacy was the first design constraint?
- You label context from the sensor data. What if you labeled from the user's perspective first and then checked whether the sensors agree?

# Look closely at the most embarrassing details and amplify them

- The model told the user they were at work when they were at a hospital. The embarrassing error is the failure specification
- Your "state of the art" system is outperformed by time-of-day alone for 80% of context queries. Amplify that finding
- The participant who found the sensing invasive. Their discomfort is more important than your accuracy gain
- Your model works well for young professionals with smartphones. It fails for the elderly, the poor, the digitally disconnected. The embarrassing bias is the real limitation

# Lowest common denominator check -single beat -single note -single riff

- Can you tell if the person is awake or asleep? Start there
- One bit of context: is the user available, or not? If the model can't answer that reliably, nothing else matters
- Time + location. Two features. What's the minimum viable context model?
- Can the user tell you their own context in one word? That word is the label your model should reproduce

# Make a blank valuable by putting it in an exquisite frame

- The model has no inference for this hour. Report the uncertainty honestly: "I don't know what you were doing between 2 and 3 PM." That honesty is a feature
- No context change detected for an entire day. With proper framing, that's a finding: the routine was unbroken
- The sensor returned nothing useful. With metadata about why (phone off, user at home, no movement), the blank becomes a data point
- The model can't distinguish between two contexts. That confusion, properly reported, tells the user exactly what the system can and can't do

# Make an exhaustive list of everything you might do and do the last thing on the list

- The last thing on the list: model context from the person's dreams. Their dream diary is a context signal nobody's using
- You'd never model context from what someone doesn't do. But the omission — the skipped lunch, the unchecked email — is context
- You'd never ask the user's partner what context the user is in. But the other person's observation is a ground truth nobody collects
- The experiment you'd try last: give the user full control over every inference and let them correct the model in real time. Start there

# Make a sudden, destructive, unpredictable action; incorporate

- Change the user's notification settings randomly for a day. Their response to the disruption reveals their context-dependent preferences
- Remove the model entirely for a week. What does the user miss? That's what was actually useful
- Introduce a deliberate error in the context inference. The user's correction reveals what they actually care about
- Change the sampling rate dramatically. The model's response to the perturbation reveals its fragility

# Mechanicalize something idiosyncratic

- You can tell your partner's mood from the sound of the door closing. Decompose that into acoustic features: force, speed, pause before entry
- The receptionist knows who's busy by the way they walk past. Encode that as gait features + location + time
- You know you're about to lose focus because of a specific feeling. Map it to physiological correlates: heart rate variability, skin conductance, blink rate
- The grandmother knows the child is getting sick before any symptom appears. What are the behavioral micro-signals? Can you capture them?

# Mute and continue

- Silence the most informative feature (location) and see what the remaining features can do. The model that works without location is the privacy-preserving model
- Turn off notifications. Keep sensing. Let the model learn without acting. The observation without intervention is the baseline
- Remove the population prior. Let the personal model run on its own data only. What can a single person's data tell you?
- Stop inferring emotion. Keep inferring activity and social context. The muted dimension reveals what the other dimensions can and can't compensate for

# Only one element of each kind

- One sensor. One feature. One context class. What can the minimal system do?
- One user, fully modeled, for one year. Depth before breadth
- One context transition per day that matters to the user. Find it. Predict it. That's the product
- One bit of context, perfectly timed. The right information at the right moment beats a comprehensive model

# (Organic) machinery

- The context model should grow with the user. Not retrained periodically — continuously adapting, like a developing organism
- Let the features self-organize. The useful ones will emerge from the data without manual selection
- The model is not a static classifier. It's a living representation that develops habits, expectations, and surprises
- Context isn't computed. It's grown from the interaction between the person, the environment, and the model over time

# Overtly resist change

- Keep using the simple context model. The new deep learning approach isn't interpretable and the user needs to understand what the system knows
- Resist the urge to add more sensors. The current sensor set is understood. More data isn't always more context
- Don't update the model every time new data arrives. The stability of the inference is what the user trusts
- The old rule-based system (if home AND evening AND weekend THEN relaxing) is transparent and mostly right. Keep it alongside the neural model

# Put in earplugs

- Ignore the latest paper on transformer-based context models. Does your simpler model serve the user?
- Stop listening to what the tech industry says about personalization. Listen to what users say about intrusion
- Don't let the dataset drive the question. Decide what context matters first, then check if the data can answer it
- The user doesn't care about your F1 score. Stop optimizing for the benchmark and start optimizing for trust

# Remember those quiet evenings

- The first time your model correctly anticipated what the user needed, without being asked. That was the vision
- Before ubiquitous computing, people modeled each other's context through attention, memory, and care. That's still the gold standard
- Weiser's vision of calm technology. The computer that recedes into the background and serves you without demanding attention. That's still the goal
- The first diary study you read, where a person described their day in their own words. That richness is what you're trying to capture. Are you getting closer?

# Remove ambiguities and convert to specifics

- "The user is busy." Busy doing what? Busy meaning unavailable? Busy meaning productive? Busy meaning overwhelmed? Specify
- "Context-aware." Aware of which context? Location? Activity? Social setting? Emotional state? Cognitive load? List them
- "Privacy-preserving." Preserving what from whom? The user's location from the app developer? Their health data from their employer? Define the threat model
- "Personalized." Personalized to what degree? Their name in the greeting? Their schedule in the recommendations? Their psychological profile in the intervention? Each is a different system

# Remove specifics and convert to ambiguities

- Forget the specific sensor. What general type of information are you trying to capture: spatial, temporal, social, cognitive, affective?
- Don't classify into "working" or "relaxing." Estimate a continuous variable: engagement, or energy, or availability
- Abstract from the specific user. What's the general structure of human context? Rhythms, routines, relationships, and disruptions
- Remove the feature names. Look at the embedding. What dimensions does the model actually use? They might not correspond to anything you named

# Repetition is a form of change

- Every day the model observes the same commute, it understands the commute differently. The repetition is the calibration
- The user reports their context every evening for a year. Their language changes. Their categories shift. The repetition reveals the drift in self-understanding
- The same inference made every morning ("the user is waking up") is correct every time and different every time. The meaning of the context changes with the life surrounding it
- Repeated collection of the same data from the same person is not redundant. It's longitudinal. The repetition is the science

# Reverse

- Instead of inferring context from data, generate data from context. What would the sensor readings look like if the user were in context X? The generative model is the understanding test
- Instead of the system modeling the user, let the user model the system. What does the user think the system knows? The mismatch is the trust gap
- Don't predict what the user will do. Predict what the user won't do. The negative space is also context
- Start from the action you want to take (send notification, suggest route) and work backwards. What minimal context justifies the action?

# Short circuit

- Skip the model. Ask the user. "What are you doing?" beats any inference for a single query
- Skip the features. Use the raw signal. What does end-to-end learning find that your hand-crafted features miss?
- Skip the context entirely. What happens if the system just responds to the user's explicit requests without inferring anything? Is context inference actually necessary for this application?
- Go directly from sensor to action. No context representation, no classification, no labels. If the action is appropriate, the intermediate representation was unnecessary

# Shut the door and listen from outside

- Show the model's outputs to someone who doesn't know the user. Can they make sense of the context from the model alone?
- Describe your context model to someone outside computer science. Does it sound helpful or alarming?
- What does the context model look like from the user's perspective? Not the data — the experience. Do they feel understood or watched?
- Evaluate the system by its downstream effect on the user's day. Not accuracy. Effect. Did the day go better?

# Simple subtraction

- Remove one sensor. Which one can you lose without degrading the context inference?
- Remove the temporal features. What can spatial features alone tell you?
- Subtract the population prior. What does the individual model alone produce?
- Remove the model's memory. Infer context from the current moment only. What's the cost of forgetting?

# Spectrum analysis

- Decompose the user's daily activity into frequencies. The daily rhythm, the weekly rhythm, the seasonal rhythm. Each timescale carries different context
- Rank your context features by information gain. The distribution tells you where the model's power actually comes from
- The distribution of context states across users: some states are universal (sleeping), some are rare (emergency). The spectrum is the taxonomy
- Analyze the frequency of model errors across the day. The pattern of errors reveals the temporal structure the model can't capture

# Take a break

- The data collection is running. The user is living their life. You don't need to process it today
- You've been engineering features for a month. Stop. Look at the data with fresh eyes next week
- The user study has been running for three weeks. Let it run for three more before you analyze. Premature analysis leads to premature conclusions
- Step away from the model. Live your own life without measuring it for a day. Notice what the model would miss

# Take away the elements in order of apparent non-importance

- Remove the weather data. Remove the ambient light. Remove the barometer. When does the context model degrade? The tipping point reveals what's load-bearing
- Strip away the derived features first, then the raw signals, then the temporal context. What's the last thing standing?
- Remove the rarest context classes. Remove the second rarest. At what point does the model become too coarse to be useful?
- Subtract the convenience data (app usage, notifications) before the core data (location, time). See which layer carries the context

# Tape your mouth

- Show the context timeline without labels. Let the user say what they see
- Present the sensor data to the participant without your interpretation. Their narrative is the ground truth
- Don't explain the model's inference. Show the output. Does the user agree without your commentary?
- The model's prediction, presented without framing, is the fairest evaluation. If it needs explanation, it's not context-aware — it's confusing

# The inconsistency principle

- The same context looks different on different days. Monday's "working from home" and Friday's "working from home" aren't the same. The inconsistency is real
- The user's self-report contradicts the sensor data. Both are valid. The inconsistency is the gap between experience and measurement
- The model works well for routine days and fails for novel ones. The inconsistency reveals the model's dependence on pattern, not understanding
- Two people in the same place, same time, same activity — different contexts entirely. The inconsistency is subjectivity, and it's not a bug

# The tape is now the music

- The sensor trace isn't a proxy for context. It is the data. Study it as an object in itself
- The model's representation of the user isn't a map of their life. It's a new object — a computational portrait. What does it capture? What does it distort?
- The context log is not just a record. It's a mirror the user can look into. The looking changes the context
- Your dataset isn't a sample of real life. It's a specific artifact produced by specific sensors on specific people in specific circumstances. That's what you actually have

# Think of the radio

- The user doesn't read your paper. They experience the notification. Design for the experience, not the model
- The clinician needs one context signal: is the patient deteriorating? Your 50-dimensional model needs to answer a yes/no question
- The caregiver needs to know: are they safe? The context model's audience is not the researcher
- The regulator needs to know: what does the system know about the user? Can you explain it in plain language?

# Tidy up

- Standardize the data format across all participants. The heterogeneity is hiding bugs
- Document every preprocessing step. Future you will not remember why you chose a 30-second window
- Clean the label set. "Working," "at work," "work task," and "office" are the same context in four different spellings
- Reconcile the sensor timestamps. Clock drift between devices produces phantom context transitions

# Trust in the you of now

- You've been studying context for years. Your sense of what's a meaningful context signal is trained. Trust it
- Your intuition that this feature is noise is probably right. Drop it
- You know the model is missing something. You can feel it when you look at the output. Follow that feeling
- The design decision you'd make today is better than the one you made at the start of the project. Redesign

# Turn it upside down

- Instead of modeling the user's context for the system, model the system's context for the user. What does the user need to know about what the system knows?
- Instead of inferring context from behavior, predict behavior from context. The prediction error reveals what's not context — it's agency
- Instead of the system adapting to the user, let the user adapt the system. The adaptations they make reveal what context matters to them
- Flip the privacy model: default to no data, and let the user opt in feature by feature. What do they volunteer?

# Twist the spine

- You've been thinking about context as a classification problem. Think about it as a compression problem: what is the minimum representation that preserves the user's experience?
- Move from the individual to the dyad. The context between two people — the relationship, the shared history, the power dynamic — is a different kind of context
- Shift from sensing to narrating. What if the context model's output were a sentence, not a label?
- Think about context not as what is happening but as what matters right now. Relevance, not state. Salience, not classification

# Use an old idea

- Dey's 2001 definition of context: "any information that can be used to characterize the situation of an entity." It's still the best definition. Why haven't we moved beyond it?
- The day planner. The Filofax. The personal diary. Paper-based context management systems that worked for centuries
- Suchman's situated action (1987). Plans are resources for action, not programs for behavior. Your context model is a resource, not a controller
- Csikszentmihalyi's experience sampling method (1977). Random prompts, real-time self-report. The gold standard hasn't changed in fifty years

# Use an unacceptable color

- Model the context nobody wants to measure: loneliness, boredom, meaninglessness
- Study the population nobody recruits for context studies: the unhoused, the incarcerated, the digitally disconnected
- Model the context that's uncomfortable to acknowledge: the user is avoiding their family, the user is procrastinating, the user is drinking alone
- Build the model for the device nobody has: no smartphone, no watch, no smart home. What context can be inferred from the physical environment alone?

# Use fewer notes

- One feature: time of day. How much context does that single variable carry?
- One model: a lookup table of the user's typical context by hour and day of week. How often is it right?
- One question, once a day: "How was your day?" The answer, over months, is a context model
- Reduce the context vocabulary to three states: active, resting, transitioning. Is that enough for the application?

# Use filters

- Only model the contexts the user cares about. Ask them which ones. Discard the rest
- Only analyze the hours the user consents to. The filtered dataset is more ethical and might be more useful
- Filter by confidence: only act on high-confidence inferences. Let the ambiguous moments pass
- Only look at context transitions, not steady states. The transitions are where the user needs the system most

# Use "unqualified" people

- The designer who's never heard of activity recognition will design a better interface than the engineer
- The poet describes context more precisely than your feature vector: "Late afternoon light, a room emptied of its morning purpose"
- The sociologist sees context as structural: class, power, access. Your model sees sensor data. Both are true
- The user who doesn't understand the model will use it in ways you didn't anticipate. Their misuse is a design insight

# Water

- Context flows. It doesn't switch between discrete states — it drifts, pools, surges, and ebbs
- Let the model be fluid. Hard classifications create artificial boundaries. Soft probabilities over context states respect the reality
- The user moves through context like water through a landscape. The terrain shapes the flow, but the flow reshapes the terrain
- Data flows from user to model to inference to action and back. The circulation is the system. Not any single component

# What are you really thinking about just now? Incorporate

- You keep thinking about your own daily routine and how poorly any model would capture it. That's the design specification
- You're worried about the privacy implications. The worry is a research question. Formalize it
- You're thinking about your grandmother, who has no smartphone. How would you model her context? That's the hardest and most important problem
- You're distracted by the gap between what you measure and what you want to know. That gap is the entire field. Stay with it

# What is the reality of the situation?

- The user has a phone with GPS, accelerometer, and a microphone. That's what you have. Design for that, not for the ideal sensor suite
- The dataset has twenty participants, mostly students, for two weeks. That's not "personal context modeling" — it's a pilot
- The user will turn off the sensor when it drains the battery. The model must work with intermittent data
- Most people's lives are routine. The model doesn't need to handle every possible context — just the twenty that cover 95% of the user's time

# What mistakes did you make last time?

- Last time you asked participants to self-report every thirty minutes and they stopped after three days. Reduce the burden
- The previous model overfit to one user's routine and failed for everyone else. Regularize harder
- You didn't collect ground truth during the study. This time, build in the annotation before you start
- The privacy policy was vague. This time, specify exactly what is collected, what is inferred, who can see it, and when it's deleted

# What would your closest friend do?

- Your friend would say: this is creepy. And they'd be right to say it. Does the system pass the friend test?
- Your colleague would say: have you actually asked the users what context they want the system to know?
- Your mentor would say: simplify. The twenty-feature model isn't better than the three-feature model if nobody trusts it
- Someone who cares about you would say: are you comfortable being on the other side of this system?

# What wouldn't you do?

- You'd never model someone's context without their knowledge. But many deployed systems do. Study the gap between your ethics and the industry's practice
- You'd never share the context data with an advertiser. But your architecture doesn't prevent it. Design the architecture to match the principle
- You'd never infer a medical condition from behavioral data. But the model might do it implicitly. Can you prevent the inference, or only the disclosure?
- You'd never want your own context modeled this way. If not, redesign until you would

# Work at a different speed

- Sample once per hour instead of once per second. The coarse model captures the rhythm. The fine model captures the noise
- Update the model weekly instead of continuously. What context is visible at the weekly cadence?
- Run a study for two years instead of two weeks. What longitudinal context do you see that the cross-section misses?
- Speed up the feedback: show the user the inference in real time. Their immediate reaction is the fastest label

# You are an engineer

- The system needs to run on a phone with a battery. That's a constraint, not an afterthought
- The latency of the inference matters. A context prediction that arrives ten minutes late is useless
- The model needs to be updatable without retraining from scratch. Design for incremental learning
- Privacy is not a philosophical concern. It's a system requirement. Build it into the architecture

# You can only make one dot at a time

- One person, one day, one model. Understand it fully before you generalize
- One context feature at a time. Test its predictive power. Then add the next
- One design decision at a time: what to sense, what to infer, what to show, what to act on. Each one has consequences
- The longitudinal model is built one day at a time. Today's data point is today's contribution. Be patient

# You don't have to be ashamed of using your own ideas

- Your intuition about what makes a moment meaningful — that's the specification for the model. Use it
- The context taxonomy you invented because the literature's taxonomy didn't fit your data. It might be better. Test it
- Your hunch that self-report and sensing capture fundamentally different things. That's a hypothesis. Formalize it
- The simple model you built in an afternoon that works surprisingly well. It doesn't need to be complex to be a contribution

# [blank white card]

- The context that no sensor can measure and no model can infer is the one the person carries internally: meaning, purpose, anticipation, dread
- There is no strategy for capturing what it's like to be someone else. That's the limit of context modeling and the beginning of empathy
- The blank card is the context the user chooses not to share. It's the most important context and it belongs to them
- You are trying to build a system that understands someone's situation. That's an ancient human project. The technology is new. The ambition — and its dangers — are not