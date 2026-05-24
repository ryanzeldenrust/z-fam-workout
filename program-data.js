window.ZFAM_PROGRAM = {
  meta: {
    name: "Z Fam Workout",
    startDate: "2026-05-24",
    endDate: "2026-11-15",
    weeklyStructure: {
      liftAWindow: "Sunday or Monday",
      liftBWindow: "Wednesday or Thursday",
      runDayWindow: "Friday or Saturday"
    },
    goals: [
      "Vertical jump",
      "Speed and conditioning",
      "Basketball explosiveness",
      "Muscle gain",
      "General strength",
      "Injury prevention",
      "Fun",
      "Fat loss"
    ]
  },
  users: [
    { id: "ryan", name: "Ryan", color: "#42d6ff", avatar: "R", cardioMode: "bike", cardioMultiplier: 2 },
    { id: "vic", name: "Vic", color: "#ffcb45", avatar: "V", cardioMode: "run", cardioMultiplier: 1 },
    { id: "sylvia", name: "Sylvia", color: "#ff6fb1", avatar: "S", cardioMode: "run", cardioMultiplier: 1 }
  ],
  progressionBlocks: [
    { key: "block_1", name: "Strength Base + Jump Prep", startWeek: 1, endWeek: 8, dates: "2026-05-24 to 2026-07-18", rule: "Use heavier loads and lower reps. Stop sets with 1-2 good reps left." },
    { key: "block_2", name: "Power + Volume Build", startWeek: 9, endWeek: 17, dates: "2026-07-19 to 2026-09-19", rule: "Moderate load and moderate reps. Add slightly more jump volume." },
    { key: "block_3", name: "Speed, Reps + Basketball Engine", startWeek: 18, endWeek: 26, dates: "2026-09-20 to 2026-11-15", rule: "Lighter/faster loads, higher reps, speed intent, cleaner movement." }
  ],
  deloadWeeks: [4, 8, 12, 16, 20, 24],
  painRules: {
    caution: "Knee or Achilles pain 4+ means reduce jumping volume by 50 percent and use bike instead of running if needed.",
    stop: "Sharp pain means stop the movement and switch to a pain-free option.",
    jumpQuality: "If jump height or explosiveness clearly drops, stop the jump block early."
  },
  trackingGroups: {
    full: ["Hang clean", "Half squat", "Trap bar jump", "RDL", "Box step-up", "Bench press", "Seated row", "Lat pulldown", "Weighted approach jump", "Box jump", "Speed box jump", "Run distance", "Run time"],
    light: ["Tibialis bar", "Static calf raise hold", "Crouched calf ISO", "Position Two ISO", "Leg curl", "Leg extension", "Abductor/adductor machine", "Curls", "Triceps press", "Shoulder raises", "Lateral raises", "Butterfly machine"],
    checkbox: ["Lateral band walk or defensive slide", "Backward wall drive march", "45-degree drop step and stick", "Warm-up cardio", "A-skips", "Build-up runs", "Med ball throws"]
  },
  runningProgression: [
    { week: 1, weekStart: "2026-05-24", targetDistanceMiles: 1.5, note: "Easy run/walk allowed." },
    { week: 2, weekStart: "2026-05-31", targetDistanceMiles: 1.75, note: "Easy pace." },
    { week: 3, weekStart: "2026-06-07", targetDistanceMiles: 2.0, note: "Comfortable finish." },
    { week: 4, weekStart: "2026-06-14", targetDistanceMiles: 1.5, note: "Deload week." },
    { week: 5, weekStart: "2026-06-21", targetDistanceMiles: 2.25 },
    { week: 6, weekStart: "2026-06-28", targetDistanceMiles: 2.5 },
    { week: 7, weekStart: "2026-07-05", targetDistanceMiles: 2.75 },
    { week: 8, weekStart: "2026-07-12", targetDistanceMiles: 2.0, note: "Deload week." },
    { week: 9, weekStart: "2026-07-19", targetDistanceMiles: 3.0 },
    { week: 10, weekStart: "2026-07-26", targetDistanceMiles: 3.25 },
    { week: 11, weekStart: "2026-08-02", targetDistanceMiles: 3.5 },
    { week: 12, weekStart: "2026-08-09", targetDistanceMiles: 2.75, note: "Deload week." },
    { week: 13, weekStart: "2026-08-16", targetDistanceMiles: 3.75 },
    { week: 14, weekStart: "2026-08-23", targetDistanceMiles: 4.0 },
    { week: 15, weekStart: "2026-08-30", targetDistanceMiles: 4.5 },
    { week: 16, weekStart: "2026-09-06", targetDistanceMiles: 3.5, note: "Deload week." },
    { week: 17, weekStart: "2026-09-13", targetDistanceMiles: 5.0 },
    { week: 18, weekStart: "2026-09-20", targetDistanceMiles: 5.5 },
    { week: 19, weekStart: "2026-09-27", targetDistanceMiles: 6.0 },
    { week: 20, weekStart: "2026-10-04", targetDistanceMiles: 4.5, note: "Deload week." },
    { week: 21, weekStart: "2026-10-11", targetDistanceMiles: 6.25 },
    { week: 22, weekStart: "2026-10-18", targetDistanceMiles: 6.75 },
    { week: 23, weekStart: "2026-10-25", targetDistanceMiles: 7.25 },
    { week: 24, weekStart: "2026-11-01", targetDistanceMiles: 5.5, note: "Deload week." },
    { week: 25, weekStart: "2026-11-08", targetDistanceMiles: 7.5 },
    { week: 26, weekStart: "2026-11-15", targetDistanceMiles: 8.0, note: "Goal run." }
  ],
  workouts: {
    workout_a: {
      key: "workout_a",
      shortName: "Workout A",
      name: "Workout A: Jump Power",
      type: "lift",
      mission: "Jump Power",
      estimatedMinutes: "60-90",
      purpose: ["Vertical jump", "Trap bar explosiveness", "Posterior chain strength", "Lower-leg stiffness", "Basketball takeoff power"],
      blocks: [
        { name: "Warm-Up / Movement Prep", trackingType: "checkbox", exercises: [
          { name: "Bike or treadmill walk", prescription: "5 minutes easy", cue: "Get warm, do not turn this into conditioning." },
          { name: "Lateral band walk or defensive slide", prescription: "2-4 trips each direction", cue: "Stay low. Push the floor sideways. Feel the inside edge of the foot and control the return." },
          { name: "Backward wall drive march", prescription: "2 x 8-10 drives each leg", cue: "Hands on wall. Drive through the ball of the foot. Knee tracks over big toe. Squeeze the quad." },
          { name: "45-degree drop step and stick", prescription: "2-3 reps each side", cue: "Step back at a 45. Outside edge to inside edge. Stick the landing like a penultimate step." },
          { name: "Position Two ISO", prescription: "2 x 20-30 seconds each leg", cue: "Knee up, heel high, big toe down, do not roll to pinky toe." }
        ]},
        { name: "Jump Primer", trackingType: "light", exercises: [
          { name: "Box jump", prescriptionByBlock: { block_1: "4 x 3", block_2: "5 x 3", block_3: "4 x 4" }, rest: "60-90 seconds", cue: "High intent. Land quiet. Stop before jumps get slow.", trackingFields: ["box_height", "best_jump_quality_rating"] },
          { name: "Weighted approach jump", prescriptionByBlock: { block_1: "3 x 3 bodyweight or very light", block_2: "4 x 3 light load", block_3: "4 x 4 light/moderate load" }, rest: "60-90 seconds", cue: "Basketball takeoff. Smooth approach. Explode up.", trackingFields: ["load", "best_touch_height_optional"] }
        ]},
        { name: "Main Power Lift", trackingType: "full_sets", exercises: [
          { name: "Hang clean", prescriptionByBlock: { block_1: "5 x 3", block_2: "6 x 2", block_3: "4 x 4 lighter/faster" }, rest: "2-3 minutes", cue: "Fast elbows, violent hips, clean reps only.", trackingFields: ["weight", "reps", "set_rating", "notes"] }
        ]},
        { name: "Main Strength Lift", trackingType: "full_sets", exercises: [
          { name: "Half squat", prescriptionByBlock: { block_1: "5 x 4 heavy", block_2: "4 x 6 moderate", block_3: "3 x 8 lighter/faster" }, rest: "2-3 minutes", cue: "Athletic depth. Drive hard. Do not grind ugly reps.", trackingFields: ["weight", "reps", "perceived_effort"] }
        ]},
        { name: "Posterior Chain", trackingType: "full_sets", exercises: [
          { name: "RDL", prescriptionByBlock: { block_1: "4 x 6", block_2: "3 x 8", block_3: "3 x 10" }, rest: "90-120 seconds", cue: "Hamstrings loaded, back strong, controlled down.", trackingFields: ["weight", "reps"] }
        ]},
        { name: "Lower-Leg Armor", trackingType: "light", exercises: [
          { name: "Tibialis bar", prescriptionByBlock: { block_1: "3 x 12", block_2: "3 x 15", block_3: "3 x 20" }, cue: "Controlled reps. Full range." },
          { name: "Static calf raise hold", prescriptionByBlock: { block_1: "3 x 20 seconds", block_2: "3 x 30 seconds", block_3: "3 x 40 seconds" }, cue: "Big toe down. Heel high. No ankle roll." },
          { name: "Leg curl", prescriptionByBlock: { block_1: "3 x 8", block_2: "3 x 10", block_3: "3 x 12-15" }, cue: "Smooth hamstring work. No swinging." }
        ]},
        { name: "Optional Finisher", trackingType: "checkbox", exercises: [
          { name: "Farmer carry", prescription: "3 carries of 30-40 yards", cue: "Tall posture. Strong feet. Do not rush." }
        ]}
      ]
    },
    workout_b: {
      key: "workout_b",
      shortName: "Workout B",
      name: "Workout B: Athletic Strength",
      type: "lift",
      mission: "Athletic Strength",
      estimatedMinutes: "60-90",
      purpose: ["Single-leg strength", "Upper body strength", "Jump support", "Shoulder/back balance", "Basketball durability"],
      blocks: [
        { name: "Warm-Up / Movement Prep", trackingType: "checkbox", exercises: [
          { name: "Bike, treadmill, or stair climber", prescription: "5 minutes easy", cue: "Warm up without turning it into conditioning." },
          { name: "Lateral band walk or defensive slide", prescription: "2-4 trips each direction", cue: "Stay low. Inside edge. Smooth return. Use a mini band if available, bodyweight if not." },
          { name: "Standing hip internal rotation drill", prescription: "2 x 5 each side", cue: "Inside edge of foot. Rotate through the hip. Squeeze the back glute. Use a mini band only if available." },
          { name: "Crouched calf ISO", prescription: "2 x 20-30 seconds each leg", cue: "Single-leg crouch. Big toe down. Foot and Achilles working." },
          { name: "Med ball chest pass or overhead throw", prescription: "3 x 5", cue: "Explosive but controlled." }
        ]},
        { name: "Jump / Elastic Work", trackingType: "light", exercises: [
          { name: "Speed box jump", prescriptionByBlock: { block_1: "4 x 3", block_2: "5 x 3", block_3: "4 x 5" }, rest: "60 seconds", cue: "Fast off the floor. Crisp reps.", trackingFields: ["height", "quality_rating"] },
          { name: "Trap bar jump", prescriptionByBlock: { block_1: "5 x 3 light/moderate", block_2: "6 x 3 light", block_3: "4 x 5 light and fast" }, rest: "90 seconds", cue: "Jump fast. Do not turn this into a deadlift.", trackingFields: ["load", "reps", "jump_quality_rating"] }
        ]},
        { name: "Single-Leg Strength", trackingType: "full_sets", exercises: [
          { name: "Box step-up", prescriptionByBlock: { block_1: "4 x 5 each leg", block_2: "3 x 8 each leg", block_3: "3 x 10 each leg" }, rest: "90 seconds", cue: "Drive through whole foot. Finish tall.", trackingFields: ["weight", "reps"] },
          { name: "Spring lunge", prescriptionByBlock: { block_1: "3 x 6 each leg", block_2: "3 x 8 each leg", block_3: "3 x 10 each leg" }, rest: "60-90 seconds", cue: "Elastic, controlled, basketball bounce.", trackingFields: ["reps", "quality_rating"] }
        ]},
        { name: "Upper Body Strength", trackingType: "full_sets", exercises: [
          { name: "Bench press", prescriptionByBlock: { block_1: "4 x 5", block_2: "3 x 8", block_3: "3 x 10" }, rest: "90-120 seconds", cue: "Strong reps. Leave one good rep in the tank.", trackingFields: ["weight", "reps"] },
          { name: "Seated row", prescriptionByBlock: { block_1: "4 x 6", block_2: "3 x 10", block_3: "3 x 12" }, rest: "60-90 seconds", cue: "Pull shoulder blades back. No body swing.", trackingFields: ["weight", "reps"] },
          { name: "Lat pulldown", prescriptionByBlock: { block_1: "3 x 8", block_2: "3 x 10", block_3: "3 x 12" }, rest: "60-90 seconds", cue: "Pull elbows down. Control the stretch.", trackingFields: ["weight", "reps"] }
        ]},
        { name: "Accessory Strength", trackingType: "light", exercises: [
          { name: "Leg extension", prescriptionByBlock: { block_1: "3 x 10", block_2: "3 x 12", block_3: "3 x 15" } },
          { name: "Leg curl", prescriptionByBlock: { block_1: "3 x 10", block_2: "3 x 12", block_3: "3 x 15" } },
          { name: "Abductor/adductor machine", prescriptionByBlock: { block_1: "2 x 12 each", block_2: "3 x 12 each", block_3: "3 x 15 each" }, cue: "Hips strong for lateral basketball movement." }
        ]},
        { name: "Shoulders and Arms", trackingType: "light", exercises: [
          { name: "Shoulder press machine or dumbbell shoulder press", prescriptionByBlock: { block_1: "3 x 6", block_2: "3 x 8", block_3: "3 x 10" } },
          { name: "Lateral raises", prescriptionByBlock: { block_1: "2 x 12", block_2: "3 x 12", block_3: "3 x 15" } },
          { name: "Curl machine or dumbbell curls", prescriptionByBlock: { block_1: "2 x 10", block_2: "3 x 10", block_3: "3 x 12" } },
          { name: "Triceps press", prescriptionByBlock: { block_1: "2 x 10", block_2: "3 x 10", block_3: "3 x 12" } }
        ]}
      ]
    },
    run_day: {
      key: "run_day",
      shortName: "Run Day",
      name: "Run Day: Engine + Achilles",
      type: "run",
      mission: "Run Quest",
      estimatedMinutes: "30-75",
      purpose: ["Conditioning", "Speed base", "Running durability", "Foot and Achilles strength", "Basketball endurance"],
      blocks: [
        { name: "Run Warm-Up", trackingType: "checkbox", exercises: [
          { name: "Easy walk or bike", prescription: "5 minutes", cue: "Easy warm-up only." },
          { name: "Position Two ISO", prescriptionByBlock: { block_1: "2 x 20 seconds each leg", block_2: "2 x 30 seconds each leg", block_3: "2 x 40 seconds each leg" }, cue: "Big toe down. Heel high. Knee up. Good running posture." },
          { name: "Crouched calf ISO", prescriptionByBlock: { block_1: "2 x 15-20 seconds each leg", block_2: "2 x 25-30 seconds each leg", block_3: "2 x 30-40 seconds each leg" }, cue: "Foot stable. Do not roll outside." },
          { name: "Tibialis bar", prescription: "2 x 15-20", cue: "Full range and control." },
          { name: "A-skips or marching runs", prescription: "2 x 20 yards", cue: "Smooth rhythm. Tall posture." },
          { name: "Build-up runs", prescription: "3 x 20 yards", cue: "Start easy, finish quick, not max sprint." }
        ]}
      ]
    }
  }
};

