# Abandon normal instruments
- Train on a dataset you'd normally consider "wrong" for this task
- What if you couldn't use gradient descent?
- Evaluate with metrics from a different field entirely
- Remove the component everyone assumes is essential

# Accept advice
- What would a reviewer who rejected this paper say?
- Ask someone who doesn't work in ML
- What's the practitioner complaint you've been dismissing?
- Revisit a suggestion you previously discarded as naive

# Accretion
- Don't solve it - just make it slightly less wrong
- What small observation have you been ignoring?
- Add one thing. Then another. Don't integrate yet
- What would this look like after ten more iterations of the same small change?

# A line has two sides
- Your model's failure mode is also a capability - for what?
- What does this architecture make impossible?
- Training and inference: you've been thinking from only one side
- The benchmark measures X. What does optimizing for X destroy?

# Allow an easement (an easement is the abandonment of a stricture)
- Relax one constraint you imposed on yourself - not on the problem
- Let the model be wrong on a subset you've been forcing it to get right
- What regularization are you applying out of habit rather than necessity?
- Permit a tradeoff you've been treating as unacceptable

# Are there sections? Consider transitions
- Where does training end and fine-tuning begin? Is that boundary right?
- Your pipeline has stages. What's lost between them?
- The interesting behavior might live at the boundary between two regimes
- What happens in the first and last few steps? You've been looking at the middle

# Ask people to work against their better judgment
- What would you do if you were trying to make the model fail?
- Deliberately train with a loss function you believe is wrong
- What experiment would embarrass you to propose? Run it
- Argue the opposite position in your own paper

# Ask your body
- What feels off about this result even though the numbers are fine?
- You flinched when you saw that output. Why?
- Which part of the codebase do you dread opening?
- Where does your attention keep returning when you're not thinking about this?

# Assemble some of the instruments in a group and treat the group
- Combine three weak baselines instead of improving one strong model
- Treat the dataset, augmentation, and loss as a single object to modify
- What if your ensemble members weren't independent but entangled?
- Stop tuning individual hyperparameters. Move them together

# Balance the consistency principle with the inconsistency principle
- Your training is too stable. Inject a discontinuity
- Alternate between epochs of strict discipline and epochs of noise
- Some layers should be frozen while others mutate freely. Which?
- You've been either exploring or exploiting. Do both in the same run

# Be dirty
- Stop cleaning the data. What does the model learn from the mess?
- Use the prototype code. The refactored version lost something
- Submit the result before you've fully explained it to yourself
- A noisy gradient is still a gradient

# Breathe more deeply
- You're training for too few epochs on too little data. Be patient
- Increase the context window. Let the model see more at once
- Widen the bottleneck you introduced for "efficiency"
- What would this look like at 10x scale, not 10% more?

# Bridges -build -burn
- Connect two subfields that don't cite each other
- Remove the skip connection. Force the information through the bottleneck
- What would break if you deleted the interface between these two modules?
- Build a path between your intuition and your formalism. Then abandon one of them

# Cascades
- Let one model's error be the next model's input
- What happens when this small effect compounds over a thousand steps?
- Feed the gradient back through a system you didn't intend to differentiate through
- A single distributional shift propagates. Where does it end up?

# Change instrument roles
- Use the discriminator as a generator. Use the encoder as a classifier
- Your preprocessing is doing the real learning. Make that explicit
- Let the loss function become a trainable component
- The part you treat as fixed infrastructure might be the most interesting variable

# Change nothing and continue with immaculate consistency
- Run the same experiment again. Exactly. Is the result the same?
- You've been changing too many things between runs. Hold everything still
- The variance you're seeing might not be from what you think. Prove it
- Keep the architecture. Keep the data. Keep the hyperparameters. Train longer

# Children's voices -speaking -singing
- How would you explain this model's behavior to a child?
- What question would a beginner ask that you can't actually answer?
- Strip the jargon. What is this system literally doing?
- The naive approach you dismissed in year one — you understand it better now

# Cluster analysis
- Visualize your learned representations. What structure is there that you didn't ask for?
- Which training examples does the model treat as identical? Should it?
- Your categories are imposed. What are the natural ones?
- Look at what the model groups together in its latent space, not in yours

# Consider different fading systems
- How does performance degrade as you move away from the training distribution?
- What if the learning rate schedule told a different story — sudden drop, long plateau, slow burn?
- Your model's confidence should decay. How, and at what rate?
- Not everything should be weighted equally across time. What should be forgotten first?

# Consult other sources -promising -unpromising
- Read a biology paper. Read a physics paper. Read a linguistics paper
- The unpromising source: what do people who failed at this problem report?
- Check the forums, not the journals. What are practitioners actually struggling with?
- The most useful reference might be from 1987

# Convert a melodic element into a rhythmic element
- Turn a continuous signal into a discrete one. Or the reverse
- Your feature is spatial — reinterpret it as temporal
- What if the magnitude doesn't matter, only the pattern of when it changes?
- Recast a regression problem as a ranking problem

# Courage!
- Publish the negative result
- The idea that seems too simple to work — implement it before you talk yourself out of it
- Challenge the assumption that everyone in the field shares but nobody tests
- You already know what the next experiment should be. You're stalling

# Cut a vital connection
- Remove attention. What does the model still know?
- Sever the gradient flow between two components. Let them diverge
- What happens if the model can't see the label during training?
- Delete the feature your ablation study says matters most. Now what?

# Decorate, decorate
- Add auxiliary losses. Not because they help — to see what they reveal
- Augment the input in ways that shouldn't matter. Do they?
- Layer normalization, dropout, weight decay — stack them. What's redundant?
- Add more structure to your output space, even if the task doesn't demand it

# Define an area as 'safe' and use it as an anchor
- Fix one part of the system you trust completely. Vary everything else around it
- Establish a baseline you believe. Don't move on until you do
- Which subset of your data do you understand perfectly? Start every analysis there
- Anchor to a known-good checkpoint. Measure everything relative to it

# Destroy -nothing -the most important thing
- Delete your best-performing model and start over. What do you remember?
- Remove the entire training set and keep only the architecture. What's baked in?
- What if the most important thing is actually the thing you can afford to lose?
- Destroy nothing: leave every failed experiment in the repository. Read them again

# Discard an axiom
- What if i.i.d. doesn't hold and you stop pretending it does?
- What if the data isn't really labeled correctly, and that's fine?
- Drop the assumption that more parameters means more capacity
- What if the problem isn't learnable in the way you've framed it?

# Disconnect from desire
- Stop optimizing for the metric you want to win on
- You want this architecture to work. That's the problem
- What does the data want to do, independent of your hypothesis?
- Remove your name from the experiment mentally. What would you actually conclude?

# Discover the recipes you are using and abandon them
- Write down every default you use when starting a new project. Change three of them
- You always normalize. You always use Adam. You always use ReLU. Why?
- What's the template you copy from your last paper? Break it
- Your "from scratch" still has a recipe. What is it?

# Distorting time
- Shuffle the order of your training curriculum. What assumed sequence is actually arbitrary?
- Train on the problem backwards — predict the input from the output
- What if you showed the model the end of the sequence first?
- Compress training into one epoch. Stretch it to a thousand. The dynamics change

# Do nothing for as long as possible
- Don't intervene. Let the training run fail on its own and watch how it fails
- Resist the urge to tune. Sit with the bad results and study them
- Collect data for longer before you model anything
- The first idea is rarely the best one. How long can you wait before committing to an approach?

# Don't be afraid of things because they're easy to do
- The linear model might be the right answer
- K-nearest neighbors works. That's not a reason to dismiss it
- If the simple version solves 90% of the problem, interrogate the remaining 10% before adding complexity
- Don't avoid a method because it wouldn't impress a reviewer

# Don't be frightened of cliches
- Fine-tuning a pretrained model is obvious for a reason
- The standard benchmark is standard because it's useful. Run it
- Sometimes the right answer is just a bigger model
- The approach everyone uses might be the one that works. Try it before innovating

# Don't be frightened to display your talents
- You have a mathematical intuition about this. Formalize it instead of running another experiment
- Write the proof, not just the empirical validation
- Your domain expertise is a contribution. Don't hide it behind the model
- The observation you think is obvious might not be obvious to anyone else. State it

# Don't break the silence
- The model outputs nothing for this input. That's informative — what learned boundary is it sitting on?
- Not every input needs a prediction. When should the model abstain?
- Stop adding modules. The current architecture is trying to tell you something in its gaps
- The absence of a pattern in your results is itself a result

# Don't stress one thing more than another
- Your loss function overweights one class. Does the problem actually demand that?
- Uniform attention over all tokens. Uniform weight across all examples. What changes?
- You keep looking at the failure cases. Look at the successes with equal scrutiny
- Every layer matters the same. Stop treating depth as a hierarchy of importance

# Do something boring
- Run the grid search. All of it
- Read the documentation for the library you've been using for two years
- Write the unit tests for your data pipeline
- Reproduce someone else's result exactly before you try to beat it

# Do the washing up
- Clean up the experiment tracking. Label the runs. Delete the dead code
- Fix the technical debt in your training loop before the next experiment
- Your data loading has a subtle bug. You've been working around it. Fix it
- Refactor the evaluation script you've been copy-pasting between projects

# Do the words need changing?
- Rename your variables. Does "encoder" actually encode? Does "loss" measure what you think?
- Your problem framing uses the wrong vocabulary. What field has better words for this?
- "Generalization" means something different to you than to your collaborator. Align
- Rewrite your abstract. If the words changed, maybe the contribution changed too

# Do we need holes?
- Does the model need dropout, or have you been punching holes out of habit?
- Sparsity is a choice. What if every parameter participated?
- You're masking part of the input. What if the model saw everything?
- The gap in your data — is it a problem to fix or structure to preserve?

# Emphasize differences
- What distinguishes the examples your model gets right from the ones it gets wrong?
- Train two models differently and study where they disagree
- The interesting part of the ablation is the delta, not the absolute score
- Between two similar architectures, the tiny difference in design is the whole story

# Emphasize repetitions
- What pattern keeps appearing across your failed experiments?
- The same anomaly in three different datasets isn't a coincidence
- Your model makes the same mistake in different contexts. That's a feature of the representation
- Which component appears in every successful architecture for this problem? That's load-bearing

# Emphasize the flaws
- Zoom into the worst predictions. Build a dataset of only those
- The gradient is exploding in one specific layer. That layer is the story
- Your model's most confident wrong answers reveal more than its correct ones
- The flaw in the proof sketch is where the real theoretical question lives

# Faced with a choice, do both
- Classification or regression? Multitask with both
- Supervised or self-supervised? Pre-train one way, fine-tune the other
- Large model or small model? Train both and study where they diverge
- You're deciding between two loss functions. Sum them

# Feedback recordings into an acoustic situation
- Feed the model's outputs back as inputs. What does it converge to?
- Use the model's own predictions as pseudo-labels for the next round
- The residuals from one run become the training signal for the next
- Let the model listen to itself. Self-distillation, self-play, self-critique

# Fill every beat with something
- No unused capacity. If parameters exist, they should carry information
- Every token in the context window should be doing work. Audit what's wasted
- Dense prediction — give the model something to predict at every position, not just the end
- If there's a gap in your training schedule, fill it with a pretext task

# Get your neck massaged
- Step away from the terminal. The gradient will still be there
- You've been staring at loss curves for hours. Go look at actual model outputs instead
- Switch to a completely different project for a day. Come back with fresh eyes
- Talk about the problem out loud to someone who won't understand it

# Ghost echoes
- The model was trained on data that no longer exists. What traces remain in the weights?
- Artifacts from pre-training persist into fine-tuning. Which ones, and are they useful?
- Your deleted data still shapes the model through what it learned before you removed it
- The architecture remembers the problem it was originally designed for. That ghost is still there

# Give the game away
- Open-source the model before the paper is finished
- Put your negative results in the main text, not the appendix
- Tell your competitor exactly what you're doing. The execution still matters
- Make your entire experimental setup reproducible. If someone can replicate it trivially, was it ever really your advantage?

# Give way to your worst impulse
- Overfit deliberately. Memorize the entire training set. Now study what that looks like
- Use an absurdly large learning rate. What happens before it diverges?
- Train on the test set. Not to cheat — to understand the ceiling
- The hacky shortcut you know is wrong — try it and see why it's wrong

# Go slowly all the way round the outside
- Before changing the model, understand every data point it sees
- Trace one example through every layer. Watch it transform
- Walk the perimeter of the problem: what's adjacent to this task that you haven't considered?
- Don't optimize. Profile. Map the full loss landscape before you descend

# Honor thy error as a hidden intention
- The bug that improved performance — understand it before you fix it
- Your model learned something you didn't intend. That might be the real finding
- The training run that went wrong produced unusual representations. Save them
- Mode collapse might be the model telling you the modes weren't real

# How would you have done it?
- Without deep learning, how would a statistician from 1990 approach this?
- How would you solve this with only ten labeled examples and a week?
- If you had to deploy tomorrow with whatever you have now, what would you ship?
- How would the person who collected this data expect it to be used?

# Humanize something free of error
- The model achieves perfect accuracy. Why doesn't anyone trust it?
- Add calibrated uncertainty to a system that only outputs point estimates
- Perfect reconstruction isn't perception. What would make the output feel right?
- Your model is technically correct and completely useless. What's missing?

# Imagine the music as a moving chain or caterpillar
- Think of the forward pass as a continuous transformation, not a stack of discrete layers
- Your data is a trajectory, not a collection. What dynamics generated it?
- Follow one representation as it moves through the network. Where does it accelerate? Where does it stall?
- The model is a process, not an object. Study its flow

# Imagine the music as a set of disconnected events
- What if each training example were truly independent, with no shared structure?
- Treat each layer as its own model. What does each one solve in isolation?
- Break the sequence. Does the model still work on shuffled fragments?
- Your end-to-end pipeline is hiding the fact that these are separate problems

# Infinitesimal gradations
- Make the change smaller. Smaller than that. What's the minimum perturbation that changes the output class?
- Move through hyperparameter space in finer steps. The transition is sharper than you think
- Interpolate between two models. Where in that interpolation does behavior change?
- The difference between working and not working might be a single decimal place

# Intentions -credibility of -nobility of -humility of
- What is this model actually for? Not what you say — what it's used for
- Are you solving this problem because it matters or because you can measure it?
- Your stated motivation and your actual experimental design don't match. Which is honest?
- Humility: the model might not need to exist. Is the problem real?

# Into the impossible
- Try the experiment you've calculated can't work. The calculation might be wrong
- What would the architecture look like if you had infinite compute? Now approximate it
- Attempt to learn a function the theory says is unlearnable in this setting
- Set a performance target that no existing method achieves. Work backwards from there

# Is it finished?
- You've been tuning for weeks. Would the version from three days ago have been good enough?
- Define "done" before the next experiment, not after
- The model works. Stop improving it and write the paper
- At what point does further training damage what you've already learned?

# Is there something missing?
- Your model is right on average but wrong in a pattern. What structure did you leave out?
- The residuals are not random. There's a signal you're not capturing
- Which variable did you assume was irrelevant without checking?
- Your architecture has no mechanism for X. Does the problem require X?

# Is the tuning appropriate?
- Your hyperparameters are from a different problem. Re-tune for this one
- The learning rate was right at initialization. Is it still right at step 50,000?
- You tuned on the validation set so much it's become a second training set
- Are you tuning the model or tuning your measurement of the model?

# Just carry on
- The loss plateaued. Keep training. It might move again
- The approach isn't working yet. That's different from it not working
- You're halfway through a refactor. Don't start over — finish it
- Three reviewers rejected it. Submit to a fourth venue

# Left channel, right channel, center channel
- Split your model into parallel streams. What does each one specialize in?
- Train on images, text, and audio separately. Now compare what they learned
- Your multimodal model has a dominant modality. What are the other channels actually contributing?
- Run the same experiment on three different datasets. The consensus is the finding, the disagreements are the research

# Listen in total darkness, or in a very large room, very quietly
- Evaluate your model with no labels, no metrics. Just look at raw outputs
- Remove all logging. Run the model once and observe only the final result
- Test on a domain so far from training that only deep structure transfers
- What does the model do when given silence — a zero vector, an empty string, pure noise?

# Listen to the quiet voice
- The smallest eigenvalue still carries information. What information?
- The lowest-confidence predictions form a population. What do they have in common?
- One head in your attention mechanism is doing something different from the rest. Follow it
- The reviewer's minor comment, not the major one, might be the real insight

# Look at a very small object; look at its center
- Pick a single neuron. Understand everything about its activations
- Take one training example and trace exactly why the model predicts what it predicts
- Your dataset has millions of points. Fully understand just one
- Zoom into one gradient step. What actually moved and by how much?

# Look at the order in which you do things
- You preprocess, then augment, then normalize. What if you changed that order?
- You tune architecture first, then hyperparameters. What if you did it the other way?
- The order of your ablation study biased your conclusions. Run it in reverse
- Data collection, then modeling, then evaluation — what if evaluation came first?

# Look closely at the most embarrassing details and amplify them
- Your model fails spectacularly on trivial inputs. Make a whole paper about that
- The edge case you're hiding from the demo — build the benchmark around it
- The trick that makes it work is inelegant. Study the trick instead of the architecture
- The most embarrassing failure is the most informative experiment

# Lowest common denominator check -single beat -single note -single riff
- Does your model work on a single example? On two? Find the minimum
- Reduce the architecture to one layer. What's the floor?
- Test with a single feature. Which feature alone gets you the furthest?
- One epoch, one batch, one gradient step. What's already happening?

# Make a blank valuable by putting it in an exquisite frame
- Your null result becomes a contribution with the right analysis around it
- An empty model with a rigorous evaluation framework is more useful than a complex model with none
- Present the baseline with the same care you'd give the state of the art
- The absence of signal in a well-designed experiment is a finding

# Make an exhaustive list of everything you might do and do the last thing on the list
- Write down every possible experiment. The one you'd try last is the one unconstrained by your assumptions
- Rank all your ideas by how likely they are to work. Try the least likely
- The approach at the bottom of your list is there because it challenges something you believe
- What's the experiment you'd only run if everything else failed? Start there

# Make a sudden, destructive, unpredictable action; incorporate
- Randomly reinitialize 10% of the weights mid-training. What recovers and what doesn't?
- Corrupt the dataset with a burst of noise at one point. How does the model absorb it?
- Delete a layer from the trained network. Retrain only the surrounding layers
- Inject a catastrophic distribution shift. The adaptation that follows is the interesting part

# Mechanicalize something idiosyncratic
- You have a manual annotation heuristic that works. Turn it into a loss function
- Your intuitive feature engineering outperforms the learned features. Formalize why
- The trick that only works when you do it is a reproducibility debt. Automate it
- You hand-select which examples to inspect. Write that selection as an algorithm

# Mute and continue
- Freeze the encoder. Keep training the decoder. What happens?
- Zero out an entire feature channel. Does the model route around it?
- Silence the most active attention head. The rest might be enough
- Remove the input modality the model relies on most. Let it learn from what remains

# Only one element of each kind
- One layer, one head, one skip connection. What's the minimal non-trivial architecture?
- One example per class. What can the model learn from that?
- One hyperparameter sweep axis at a time. Isolate each variable completely
- Deduplicate your training set. How much was the model relying on repetition?

# (Organic) machinery
- Let the architecture grow during training. Add capacity where the model needs it
- Neural architecture search, but guided by the loss landscape rather than a fixed objective
- What if the learning rate adapted per-parameter, not by a schedule but by local curvature?
- Stop treating the model as a fixed machine. It's a developing organism

# Overtly resist change
- Keep using the framework everyone has moved on from. What did it know that the new one forgot?
- Refuse to scale up. What's the best you can do at this size?
- The field moved to transformers. Stay with convolutions for this problem and explain why
- Don't adopt the new benchmark. The old one tested something that still matters

# Put in earplugs
- Mask 90% of the input. What's the minimum the model needs?
- Ignore the leaderboard while you run experiments
- Stop reading new papers for a month. Develop your own ideas in isolation
- Remove the validation set feedback loop. Train blind and evaluate once at the end

# Remember those quiet evenings
- What worked before the scaling era? Revisit those ideas with better hardware
- The simple model from your first project. It taught you something the current one hasn't
- Before attention, before residual connections — what were the core ideas?
- Your early intuitions were less informed but less constrained. Recover them

# Remove ambiguities and convert to specifics
- "The model generalizes" — to what inputs, on what metric, within what margin?
- Replace "robust" with a specific perturbation budget and threat model
- Your claim is vague. Pin it to a number, a dataset, a falsifiable condition
- "Better representations" means nothing. Better for which downstream task?

# Remove specifics and convert to ambiguities
- Stop reporting to three decimal places. What's the story at a coarser resolution?
- Forget the specific architecture. What's the general principle that makes it work?
- Abstract away from this dataset. What class of problems are you actually solving?
- You've overfit to one benchmark. Describe the capability, not the score

# Repetition is a form of change
- Train for another hundred epochs on the same data. The model is still changing
- The same architecture trained twice produces different internal representations. Study the variance
- Rerun your best experiment. The gap between runs is the uncertainty you're not reporting
- Iterative refinement: each pass over the same problem reveals a different aspect

# Reverse
- Train the model to invert its own function. What's easy to reverse? What's not?
- Read your paper from conclusion to introduction. Does it still make sense?
- Start from the desired output and work backwards to the required input
- Reverse the direction of the loss: maximize what you were minimizing. What does the model avoid?

# Short circuit
- Skip the encoder. Feed raw data directly to the classifier. How much do you lose?
- Bypass your entire preprocessing pipeline. What was it actually doing?
- Connect the first layer directly to the last. What does the network learn to do in a single step?
- Let the model cheat. The shortcut it finds tells you what signal is cheapest to exploit

# Shut the door and listen from outside
- Don't look at the internals. Evaluate the model only by its behavior on held-out data
- Hand the model to someone who doesn't know what it's supposed to do. What do they think it does?
- Black-box your own system. What would an adversary infer about the training data from outputs alone?
- Deploy it silently to a small group. Watch what they actually do with it, not what you intended

# Simple subtraction
- Remove the most recent thing you added. Was the improvement real?
- Reduce the hidden dimension by half. What's the actual cost?
- Drop the data augmentation. How much was real signal versus artificial variety?
- Your model has four loss terms. Remove them one at a time until it breaks

# Spectrum analysis
- Decompose your learned representations: what's the rank of the weight matrix? What's the effective dimensionality?
- Fourier-transform your loss curve. Is there periodicity you're not seeing?
- Look at the singular values of the embedding matrix. Where's the drop-off?
- Your model uses a small fraction of its representational capacity. Which frequencies dominate?

# Take a break
- Save the checkpoint. Close the laptop. The experiment will still be there
- You've been debugging for hours. The bug is probably in the part you're not looking at
- Work on the writing instead of the code
- Your best ideas about this project will come while you're not working on it

# Take away the elements in order of apparent non-importance
- Start removing components you think don't matter. You'll be surprised which one collapses the performance
- Prune the smallest weights first. Keep going. Where's the cliff?
- Remove training examples your model gets right easily. What's left is the real dataset
- Strip away everything that seems optional until you find the load-bearing wall

# Tape your mouth
- Stop explaining the model. Let the results speak without your narrative
- Remove all the framing from the paper. Does the experiment stand alone?
- Don't tell the evaluator what the model is supposed to do. Does it communicate its own purpose?
- Your commentary on why it works might be wrong. Present the evidence without the story

# The inconsistency principle
- Train with contradictory labels on purpose. How does the model resolve them?
- Use different random seeds and different orderings. The inconsistencies between runs are the story
- Your method works on some datasets and fails on others. The inconsistency is the finding — don't smooth it away
- Introduce conflicting objectives. The compromise the model finds is a new solution

# The tape is now the music
- The trained weights are the result. Stop thinking of them as an approximation of something else
- Your intermediate checkpoints are artifacts in their own right, not steps toward the final model
- The training logs, the failed runs, the debugging traces — that's the research, not just the final number
- The dataset isn't a proxy for the world. It's the actual object of study

# Think of the radio
- Someone will use this model in a context you can't predict. Design for that
- What would a real-time, streaming version of your model look like?
- Your model exists in an ecosystem of other models. What's the interface?
- Who is the audience? Not the reviewer — the person who will run inference at 3 AM on bad hardware

# Tidy up
- Unify your experiment naming conventions. Future you is a collaborator
- Consolidate your five scattered config files into one source of truth
- Your results are real but your repository is incomprehensible. That's a form of irreproducibility
- Archive the dead branches. Document the living ones. Clear the path for the next idea

# Trust in the you of now
- Your current understanding is different from when you designed this experiment. Redesign it
- Stop deferring to the paper you wrote two years ago. You know more now
- The intuition you can't yet formalize is still worth following
- You don't need to read one more paper before starting. You know enough to begin

# Turn it upside down
- Predict the input from the output instead of the output from the input
- Swap the roles of training and test set. What does that reveal about your split?
- Instead of learning a mapping, learn to reject — classify what this is not
- You've been maximizing performance. Minimize the model's ability to perform and study what survives

# Twist the spine
- Change the core assumption but keep everything else. One structural rotation
- What if the bottleneck were at the beginning instead of the middle?
- Swap the order of your two main components. Does it still work? Does it work differently?
- Transpose the axes of your data representation. Rows become columns. Channels become spatial

# Use an old idea
- Kernel methods knew something that neural networks forgot
- Decision trees have interpretability properties you're trying to bolt onto deep networks
- Bayesian inference was doing uncertainty quantification before it was fashionable. Use it directly
- The 2005 paper everyone stopped citing solved a subproblem you're still struggling with

# Use an unacceptable color
- Use a dataset everyone in your subfield considers too small, too noisy, or too easy
- Apply your method to a problem domain where it obviously shouldn't work
- Choose the evaluation metric that makes your model look worst. Report that one
- Use the hardware constraint that forces you into an uncomfortable architecture

# Use fewer notes
- Your model has too many hyperparameters. Fix all but one and study that one completely
- Reduce the vocabulary. Reduce the resolution. Reduce the sequence length. What's preserved?
- One loss term. One augmentation. One regularizer. No more
- The minimal version of your idea is the version that communicates

# Use filters
- Curate the training data aggressively. Quality over quantity for one experiment
- Apply a hard threshold to your attention weights. What survives?
- Filter your results by subpopulation. The aggregate hides the structure
- Only look at examples where the model's confidence is in a narrow band. What lives in the uncertain middle?

# Use "unqualified" people
- Let an undergrad run your experiment without your guidance. What do they do differently?
- Give the model to a domain expert who doesn't know ML. What do they try?
- Use crowd-sourced annotations instead of expert labels. Where do they disagree?
- The engineer who "doesn't understand the theory" might build a better system. Let them

# Water
- Let the representation be fluid. Soft assignments, continuous relaxations, probabilistic outputs
- Your categories are artificial dams. What flows naturally in the data?
- Don't force structure. Let the model find its own level
- The gradient is already water. It flows downhill. Stop redirecting it and watch where it goes

# What are you really thinking about just now? Incorporate
- The unrelated idea you keep drifting to during this experiment — it's connected. How?
- You're thinking about a different problem. That problem and this one share structure
- The analogy you keep reaching for from outside ML — make it formal
- Your distraction is your subconscious working on the real question

# What is the reality of the situation?
- Your compute budget is fixed. What's the best you can do within it, honestly?
- The data is biased. Not in theory — specifically how, and toward whom?
- Your model will be deployed by people who don't read your paper. What will they assume?
- The gap between your reported results and real-world performance is the actual contribution you need to make

# What mistakes did you make last time?
- Review your last project's post-mortem. You're making the same error in a different form
- The hyperparameter range that was wrong last time — you've set the same range again
- Last time you evaluated too late. Last time you scaled too early. Which pattern is repeating?
- Your previous paper's weakest section maps onto this paper's blind spot

# What would your closest friend do?
- Your collaborator would simplify this. You know they would
- What would your advisor do if they had to finish this in a day?
- The colleague whose taste you trust — would they pursue this direction?
- If you had to hand this project to someone you respect, what would you clean up first?

# What wouldn't you do?
- You would never train without normalization. Why not?
- You would never use that loss function. But has anyone tried it on this problem?
- You would never submit a paper with only one experiment. What if that one experiment were perfect?
- The approach you'd never take defines the boundary of your thinking. Step over it

# Work at a different speed
- Train with a learning rate an order of magnitude higher. Or lower. Change the tempo
- Run a one-hour experiment instead of a one-week experiment. What do you learn from the sketch?
- Spend a month on the literature review instead of a day. Or vice versa
- Your iteration cycle is too slow to learn from. Or too fast to converge on anything deep

# You are an engineer
- Stop theorizing. Build it and measure
- The system needs to work, not just work in principle
- Latency, memory, throughput — these are constraints, not distractions
- Your proof means nothing if the implementation doesn't run

# You can only make one dot at a time
- Run one experiment. Interpret it fully. Then decide the next one
- You can't parallelize insight. The sequential dependency is between your experiments and your understanding
- Stop planning the whole paper. Write the next paragraph
- One change per commit. One variable per experiment. One claim per figure

# You don't have to be ashamed of using your own ideas
- The method you invented for a different project applies here. Use it
- Stop citing others to justify an idea that's yours
- Your unpublished observation is still valid as a starting point
- The approach you came up with in the shower — it doesn't need a literature review to be worth trying

# [blank white card]
- The strategy that doesn't exist yet is the one this problem needs
- What's the experiment that no oblique strategy would suggest?
- Your situation is specific. Generic advice, including this list, might not apply
- The empty prompt. The unconditional generation. What does the model do with no instruction at all?